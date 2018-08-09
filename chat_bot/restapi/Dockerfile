FROM python:3.6
RUN apt-get update

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

WORKDIR /home/DeepPavlov
RUN cd /home/DeepPavlov

RUN python -m deeppavlov install /home/DeepPavlov/deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json 
RUN python -m deeppavlov download /home/DeepPavlov/deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json 

RUN pip install keras
RUN pip install overrides

CMD python -m deeppavlov riseapi /home/DeepPavlov/deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json 
