from flask import Flask
import database as db
from utils import cursor_creator as cc
from api import api_blueprint
from flask_cors import CORS

app = Flask(__name__)

app.config['SECRET_KEY'] = 'very-secret-string'

CORS(app)

app.register_blueprint(api_blueprint,url_prefix='/api')

@app.before_request
def create_tables():

    app.before_request_funcs[None].remove(create_tables)

    db.init_db()
    
if __name__ == "__main__":
    app.run(port=5000)
