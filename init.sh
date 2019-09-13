apt update
apt upgrade -y

apt install wget git -y

wget https://developer.nvidia.com/compute/machine-learning/cudnn/secure/7.6.3.30/Production/10.0_20190822/Ubuntu18_04-x64/libcudnn7_7.6.3.30-1%2Bcuda10.0_amd64.deb
wget https://developer.nvidia.com/compute/cuda/10.0/Prod/local_installers/cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64 -o cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64.deb

dpkg -i cuda-repo-ubuntu1804-10-0-local-10.0.130-410.48_1.0-1_amd64.deb
apt update
apt install cuda-10-0
dpkg -i libcudnn7_7.6.3.30-1+cuda10.0_amd64.deb

apt install python3-pip -y

pip3 install captcha
pip3 install numpy
pip3 install matplotlib
pip3 install tensorflow-gpu

python3 tensorflow_cnn_train.py