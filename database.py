import sqlite3
from sqlite3 import Error

## With this method we try to create an connection, and return it back.
def create_connection():

    conn = None

    try:
        conn = sqlite3.connect('jobs.db')
        
        return conn
    
    except Error as e:
        
        print(f"Database Error: {e}")

        return conn
    
## With this another method, we initialize a connection and execute
## the SQL commands to create the database
def init_db():

    conn = create_connection()

    with open("schema.sql", "r") as f:
        conn.executescript(f.read())
    
    conn.close()