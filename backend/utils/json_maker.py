
"""""This method creates a JSON with the info retrieved from the cursor"""
def create_json_cursor(cursor):

    columns = [column[0] for column in cursor.description]
    results = []
    for row in cursor.fetchall():
        results.append(dict(zip(columns, row)))
    return results

