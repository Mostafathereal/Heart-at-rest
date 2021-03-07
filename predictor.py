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
    print(out.item())
    return out.item()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--age", required=True, default=30.0, metavar="", type=float)
    parser.add_argument("--sex", required=True, default=1.0, metavar="", type=float)
    parser.add_argument("--cp", required=True, default=1, metavar="", type=float)
    parser.add_argument("--trestbps", required=True, metavar="", type=float)
    parser.add_argument("--chol", required=True, default=250, metavar="", type=float)
    parser.add_argument("--fbs", required=True, default=0.0, metavar="", type=float)
    parser.add_argument("--restecg", required=True, default=1.0, metavar="", type=float)
    parser.add_argument("--thalach", required=True, default=150.0, metavar="", type=float)
    parser.add_argument("--exang", required=True, default=0.0, metavar="", type=float)
    parser.add_argument("--oldpeak", required=True, default=0.0, metavar="", type=float)
    parser.add_argument("--slope", required=True, default=1.6, metavar="", type=float)
    parser.add_argument("--ca", required=True, default=0, metavar="", type=float)
    parser.add_argument("--thal", required=True, default=3, metavar="", type=float)

    args = parser.parse_args()

    features = [args.age, args.sex, args.cp, args.trestbps, args.chol, args.fbs, args.restecg, args.thalach, args.exang, args.oldpeak, args.slope, args.ca, args.thal]

    predict(features)

###### SAMPLE USAGE ########
# python3 predictor.py --age 0.2083 --sex -1.0000 --cp -1.0000 --trestbps -0.8868 --chol -0.4429 --fbs -1.0000 --restecg -1.0000 --thalach -0.2214 --exang -1.0000 --oldpeak -0.6429  --slope 0.0000 --ca -1.0000  --thal 0.3333
