from flask import Blueprint, current_app, jsonify, request
from utils import cursor_creator as cc
from utils import json_maker as jm
import jwt
from datetime import datetime,timedelta
from werkzeug.security import generate_password_hash,check_password_hash

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route("/jobs", methods = ["GET"])
def get_jobs():
    
    cursor = cc.create_cursor()

    cursor.execute("SELECT * FROM jobs")

    jobs = jm.create_json_cursor(cursor)

    return jsonify(jobs)

@api_blueprint.route("/users", methods = ["GET"])
def get_users():

    cursor = cc.create_cursor()

    cursor.execute("SELECT * FROM users")

    users = jm.create_json_cursor(cursor)

    return jsonify(users)

@api_blueprint.route("/login", methods=["POST"])
def user_login():

    data = request.get_json()

    username = data.get('username')

    plain_password = data.get('password')

    cursor = cc.create_cursor()

    cursor.execute("SELECT * FROM users WHERE username = ?",(username,))

    users = jm.create_json_cursor(cursor)

    if not users:
        return jsonify({'error': 'Invalid credentials'}), 401
    
    user = users[0]
    
    if not check_password_hash(user['password'], plain_password):
        return jsonify({"error": "Invalid credentials"}), 401
    
    secret_key = current_app.config.get('SECRET_KEY')
    if not secret_key:
        raise ValueError("Missing JWT secret key configuration")
        
    token = jwt.encode({
        'user_id': user['id'],
        'exp': datetime.utcnow() + timedelta(hours=24)
    }, secret_key, algorithm='HS256')

    return jsonify({
        'token': token,
        'user': {
            'id': user['id'],
            'username': user['username'],
            'email': user['email'],
            'role': user['role']
        }
    })

@api_blueprint.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    plain_password = data.get('password')

    # Hash the password before storing
    hashed_password = generate_password_hash(plain_password)

    cursor = cc.create_cursor()
    cursor.execute(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        (username, email, hashed_password)
    )

    return jsonify({"message": "User registered successfully!"}), 201


