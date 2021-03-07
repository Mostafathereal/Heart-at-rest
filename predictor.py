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
    parser.add_argument("age", metavar="", type=float)
    parser.add_argument("sex", metavar="", type=float)
    parser.add_argument("cp", metavar="", type=float)
    parser.add_argument("trestbps", metavar="", type=float)
    parser.add_argument("chol", metavar="", type=float)
    parser.add_argument("fbs", metavar="", type=float)
    parser.add_argument("restecg", metavar="", type=float)
    parser.add_argument("thalach", metavar="", type=float)
    parser.add_argument("exang", metavar="", type=float)
    parser.add_argument("oldpeak", metavar="", type=float)
    parser.add_argument("slope", metavar="", type=float)
    parser.add_argument("ca", metavar="", type=float)
    parser.add_argument("thal", metavar="", type=float)

    args = parser.parse_args()

    features = [args.age, args.sex, args.cp, args.trestbps, args.chol, args.fbs, args.restecg, args.thalach, args.exang, args.oldpeak, args.slope, args.ca, args.thal]

    predict(features)

###### SAMPLE USAGE ########
# python3 predictor.py 0.2083 -1.0000 -1.0000 -0.8868 -0.4429 -1.0000 -1.0000 -0.2214 -1.0000 -0.6429  0.0000 -1.0000  0.3333
