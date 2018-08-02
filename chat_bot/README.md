# This for chat bots
## Installation
Currently we support only Linux platform and Python 3.6
1.	Clone the repo and cd to project root
```python
    git clone https://github.com/deepmipt/DeepPavlov.git
    cd DeepPavlov
```
2.	Install basic requirements:
```python
    python setup.py develop
```
3.	To use our pre-trained models, you should first install their requirements:
```python
    python -m deeppavlov install <path_to_config>
    python -m deeppavlov install deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json
```
4.	download the models and data for them:
```python
    python -m deeppavlov download <path_to_config>
    python -m deeppavlov download deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json
```
5.	Run goal-oriented bot with console interface
```python
    python -m deeppavlov interact deeppavlov/configs/seq2seq_go_bot/bot_kvret_infer.json
```
____
before 3 step pip install:
- tqdm
- telebot
- flasger

On step 5 error of ‘illegal instractions’ (tf = 1.8) appears.
Try running
```python
    pip uninstall tensorflow
    pip install tensorflow==1.5
```
And then install
- keras
- overrides
6.	Usage example
To infer from a pretrained model with config path equal to path/to/config.json :
```python
from deeppavlov.core.commands.infer import build_model_from_config
from deeppavlov.core.common.file import read_json

CONFIG_PATH = 'path/to/config.json'
model = build_model_from_config(read_json(CONFIG_PATH))

utterance = ""
while utterance != 'exit':
    print(">> " + model([utterance])[0])
    utterance = input(':: ')

```
