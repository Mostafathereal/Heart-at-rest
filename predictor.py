import tensorflow as tf
from tensorflow import keras
import numpy as np
import os
import argparse

trained_model = keras.models.load_model('model_3_reg.h5', compile=False)

optimizer = tf.keras.optimizers.RMSprop(0.001)
trained_model.compile(loss='mean_squared_error',
                optimizer=optimizer,
                metrics=['accuracy'])

def predict(features):

    input = np.array([features])
    out = trained_model.predict(input)
    return out.item()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--age", default=30.0, metavar="", type=float)
    parser.add_argument("--sex", default=1.0, metavar="", type=float)
    parser.add_argument("--cp", default=1, metavar="", type=float)
    # parser.add_argument("--trestbps", required=True, metavar="", type=float)
    parser.add_argument("--chol", default=125, metavar="", type=float)
    parser.add_argument("--fbs", default=0.0, metavar="", type=float)
    parser.add_argument("--restecg", default=1.0, metavar="", type=float)
    parser.add_argument("--thalach", default=140.0, metavar="", type=float)
    parser.add_argument("--exang", default=0.0, metavar="", type=float)
    parser.add_argument("--oldpeak", default=0.0, metavar="", type=float)
    parser.add_argument("--slope", default=1.6, metavar="", type=float)
    parser.add_argument("--ca", default=0, metavar="", type=float)
    parser.add_argument("--thal", default=3, metavar="", type=float)

    args = parser.parse_args()

    with open("bp.txt") as file:
        bp = float(file.read().strip('\n'))

    features = [args.age, args.sex, args.cp, bp, args.chol, args.fbs, args.restecg, args.thalach, args.exang, args.oldpeak, args.slope, args.ca, args.thal]


    prediction = int(predict(features) * 100 )
    print("--- RISK PREDICTION --- ", prediction)

    with open("risk.txt", 'w') as file:
        file.write(str(prediction))


###### SAMPLE USAGE ########
# python3 predictor.py --age 0.2083 --sex -1.0000 --cp -1.0000 --trestbps -0.8868 --chol -0.4429 --fbs -1.0000 --restecg -1.0000 --thalach -0.2214 --exang -1.0000 --oldpeak -0.6429  --slope 0.0000 --ca -1.0000  --thal 0.3333
