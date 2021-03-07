import tensorflow as tf
from tensorflow import keras
import numpy as np
import os

trained_model = keras.models.load_model('model_3_reg.h5', compile=False)

optimizer = tf.keras.optimizers.RMSprop(0.001)
trained_model.compile(loss='mean_squared_error',
                optimizer=optimizer,
                metrics=['accuracy'])

def predict(features):

    input = np.array([features])
    out = trained_model.predict(input)
    return out.item()
