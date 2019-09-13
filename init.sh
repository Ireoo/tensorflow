apt update
apt upgrade -y

apt install wget git -y

wget https://developer.nvidia.com/compute/cuda/10.0/Prod/local_installers/cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64 -o cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64.deb

dpkg -i cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64.deb
apt update
apt install cuda-10-0

wget https://github.com/Ireoo/tensorflow/releases/download/cnn/libcudnn7_7.6.3.30-1+cuda10.0_amd64.deb
dpkg -i libcudnn7_7.6.3.30-1+cuda10.0_amd64.deb

apt install python3-pip -y

pip3 install captcha
pip3 install numpy
pip3 install matplotlib
pip3 install tensorflow-gpu

cd captcha

python3 captcha_gen_default.py
python3 captcha_records.py
python3 captcha_train.py