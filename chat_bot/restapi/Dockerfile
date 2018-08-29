FROM python:3.6
RUN apt-get update

RUN apt-get install -y python3-numpy 
RUN apt-get install -y python3-dev 
RUN apt-get install -y python3-pip 
RUN apt-get install -y python3-wheel
##RUN apt-get install -y cuda-8-0


COPY requirements.txt /home/requirements.txt
RUN pip install -r /home/requirements.txt

WORKDIR /home
COPY . /home

RUN cd /home

RUN git clone https://github.com/deepmipt/DeepPavlov.git
ENV PYTHONPATH=/home/DeepPavlov

WORKDIR /home/DeepPavlov
RUN cd /home/DeepPavlov

RUN python setup.py develop

RUN python -m deeppavlov install /home/DeepPavlov/deeppavlov/configs/go_bot/gobot_dstc2_best.json
RUN python -m deeppavlov download /home/DeepPavlov/deeppavlov/configs/go_bot/gobot_dstc2_best.json 

RUN pip uninstall -y tensorflow
RUN pip install --upgrade tensorflow==1.5.0

RUN pip install keras
RUN pip install overrides

##RUN export PATH="$PATH:/usr/local/cuda-8.0/bin"
##RUN export LD_LIBRARY_PATH="/usr/local/cuda-8.0/lib64"

CMD python -m deeppavlov riseapi /home/DeepPavlov/deeppavlov/configs/go_bot/gobot_dstc2_best.json 
