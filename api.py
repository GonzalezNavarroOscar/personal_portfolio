from flask import Blueprint, jsonify, render_template
import database as db
from utils import cursor_creator as cc

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route("/jobs", methods = ["GET"])
def get_jobs():
    
    cursor = cc.create_cursor()

    cursor.execute("SELECT * FROM jobs")

    jobs = cursor.fetchall()

    return jsonify(jobs)