from deeppavlov.core.commands.infer import build_model_from_config
from deeppavlov.core.common.file import read_json

CONFIG_PATH = '/home/DeepPavlov/deeppavlov/configs/intents/intents_dstc2.json'
model = build_model_from_config(read_json(CONFIG_PATH))

for i in range(10):
    var = input("::")
    print(">> " + str(var))
    resp = model([var])[0]
    print('>>', resp)
