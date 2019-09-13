apt update
apt upgrade -y

apt install wget git -y

curl -o cuda.deb https://github.com/Ireoo/tensorflow/releases/download/cnn/cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64.deb
dpkg -i cuda.deb

apt update
apt install cuda-10-0

curl -o cudnn.deb https://github.com/Ireoo/tensorflow/releases/download/cnn/libcudnn7_7.6.3.30-1+cuda10.0_amd64.deb
dpkg -i cudnn.deb

apt install python3-pip -y

pip3 install captcha
pip3 install numpy
pip3 install matplotlib
pip3 install tensorflow-gpu

cd captcha

python3 captcha_gen_default.py
python3 captcha_records.py
python3 captcha_train.py