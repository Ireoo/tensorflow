# about captcha image
IMAGE_HEIGHT = 35
IMAGE_WIDTH = 80
CHAR_SETS = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
CLASSES_NUM = len(CHAR_SETS)
CHARS_NUM = 4
# for train
RECORD_DIR = './data'
TRAIN_FILE = 'train.tfrecords'
VALID_FILE = 'valid.tfrecords'
