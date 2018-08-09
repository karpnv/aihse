from flask import Flask
from redis import Redis

from deeppavlov.core.commands.infer import build_model_from_config
from deeppavlov.core.common.file import read_json

CONFIG_PATH = '/home/DeepPavlov/deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json'
model = build_model_from_config(read_json(CONFIG_PATH))

utterance = ""
while utterance != 'exit':
    print(">> " + model([utterance])[0])
    utterance = input(':: ')

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
