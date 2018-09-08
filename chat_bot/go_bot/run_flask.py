from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/hi')
def first_page():
    content="BotaNick"
    html="""<head></head><body>%s</body>""" %content
    return html

@app.route('/', methods=['POST'])
def post_request():
    context = request.get_json(force=True)
    
    resp="""["%s"]""" %"Hey"
    return resp

if __name__ == "__main__":
    app.run(host='0.0.0.0',
            port=8081,
            debug=True)
