FROM python:3.6

RUN pip install django 
RUN apt-get update

WORKDIR /home
COPY . /home
RUN cd /home

RUN git clone https://github.com/deepmipt/DeepPavlov.git
ENV PYTHONPATH=/home/DeepPavlov

WORKDIR /home/DeepPavlov
RUN cd /home/DeepPavlov

RUN python setup.py develop

WORKDIR /home
RUN cd /home

RUN pip install -r requirements.txt

COPY . /home
RUN cd /home

WORKDIR /home/DeepPavlov
RUN cd /home/DeepPavlov

RUN python -m deeppavlov install /home/DeepPavlov/deeppavlov/configs/intents/intents_dstc2.json
RUN python -m deeppavlov download /home/DeepPavlov/deeppavlov/configs/intents/intents_dstc2.json

ENTRYPOINT ["/bin/bash"]
