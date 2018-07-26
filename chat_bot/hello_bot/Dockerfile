FROM python:3.6

RUN pip install django 

RUN apt-get update

##RUN mkdir home

WORKDIR /home
COPY . /home

RUN cd /home

RUN pip install -r requirements.txt


RUN git clone https://github.com/deepmipt/DeepPavlov.git


ENV PYTHONPATH=/home/DeepPavlov


RUN python /home/DeepPavlov/setup.py develop


##RUN python -m deeppavlov install <path_to_config>
RUN python -m deeppavlov install deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json

##RUN python -m deeppavlov download <path_to_config>
##RUN python -m deeppavlov download deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json

##RUN pip uninstall tensorflow
##RUN pip install tensorflow==1.5

##RUN python -m deeppavlov interact deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json
