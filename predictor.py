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

###### SAMPLE USAGE ########
# sample_data = [0.2083, -1.0000, -1.0000, -0.8868, -0.4429, -1.0000, -1.0000, -0.2214, -1.0000, -0.6429,  0.0000, -1.0000,  0.3333]
# predict(sample_data)
