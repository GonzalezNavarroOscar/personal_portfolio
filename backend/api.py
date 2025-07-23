from flask import Blueprint, jsonify
from utils import cursor_creator as cc

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route("/jobs", methods = ["GET"])
def get_jobs():
    
    cursor = cc.create_cursor()

    cursor.execute("SELECT * FROM jobs")

    columns = [column[0] for column in cursor.description]

    jobs = []

    for row in cursor.fetchall():
        jobs.append(dict(zip(columns,row)))

    return jsonify(jobs)