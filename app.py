from flask import Flask, render_template
import database as db
from utils import cursor_creator as cc
from api import api_blueprint

app = Flask(__name__)

app.register_blueprint(api_blueprint,url_prefix='/api')

@app.before_request
def create_tables():

    app.before_request_funcs[None].remove(create_tables)

    db.init_db()

@app.route("/")
def index():
    return render_template('index.html')
    
if __name__ == "__main__":
    app.run(debug=True)
