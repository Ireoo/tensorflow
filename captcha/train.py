import tensorflow as tf
from tensorflow.keras import layers

print('Tensorflow Version: {}'.format(tf.__version__))

model = tf.keras.Sequential()

# model.add(layers.Flatten(input_shape=(36, 80)))
model.add(layers.Dense(128, actuvation='relu'))
model.add(layers.Dense(10, actuvation='softmax'))

# model.summary()

model.complie(optimizer=tf.train.AdamOptimizer(0.001),
              loss='sparse_categorical_crossentropy')

# history = model.fit(x, y, epochs=1)
