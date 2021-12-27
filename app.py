from logging import debug
from os import name
#from werkzeug.utils import send_from_directory
from flask import Flask, request, render_template
from flask.json import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='templates', static_url_path='')
CORS(app)

@app.route('/', methods=['GET'])
@cross_origin()
def func_home():
    test()
    return render_template('index.html')

def test():
    print("RUN!")

if __name__ == '__main__':
    app.run(debug=False, port=5000)