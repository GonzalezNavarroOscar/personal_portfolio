from flask import Flask, request, jsonify, render_template
import database as db
from utils import cursor_creator as cc

app = Flask(__name__)

@app.before_request
def create_tables():

    app.before_request_funcs[None].remove(create_tables)

    db.init_db()


@app.route("/jobs", methods = ["GET"])
def get_jobs():
    
    cursor = cc.create_cursor()

    cursor.execute("SELECT * FROM jobs")

    jobs = cursor.fetchall()

    return jsonify(jobs)

@app.route("/")
def index():
    return render_template('index.html')

    
if __name__ == "__main__":
    app.run(debug=True)
