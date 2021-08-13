import time
import random
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

animals = ["whale", "snake", "cat", "monkey", "camel", "rabbit", "pig", "bird", "lion", "duck"]
#  oehglegjir
animal = random.choice(animals)

@app.route('/api', methods=['GET'])
def api():
    return {
        'userId': 1,
        'animal': f"{animal}",
        'completed': False,
    }

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == '__api__':
   app.run(debug=True)