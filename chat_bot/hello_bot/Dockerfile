FROM python:3.6

RUN pip install django 

RUN apt-get update

WORKDIR /home
COPY . /home

RUN cd /home

RUN git clone https://github.com/deepmipt/DeepPavlov.git
ENV PYTHONPATH=/home/DeepPavlov

ENTRYPOINT ["/bin/bash"]
