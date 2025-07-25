import database as db

""""This method create the cursor to execute query's"""
def create_cursor():
    
    conn = db.create_connection()

    cursor = conn.cursor()

    return cursor

