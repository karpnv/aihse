FROM python:3.6
RUN apt-get update

COPY requirements.txt /home/requirements.txt
RUN pip install -r requirements.txt

WORKDIR /home
COPY . /home
RUN cd /home


RUN git clone https://github.com/deepmipt/DeepPavlov.git
ENV PYTHONPATH=/home/DeepPavlov

ENTRYPOINT ["/bin/bash"]
