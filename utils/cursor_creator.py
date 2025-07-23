import database as db

def create_cursor():
    
    conn = db.create_connection()

    cursor = conn.cursor()

    return cursor

