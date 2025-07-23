import sqlite3

def insert_dev_data():
    conn = sqlite3.connect("jobs.db")
    cursor = conn.cursor()

    # Clear existing data (optional)
    cursor.execute("DELETE FROM jobs")
    cursor.execute("DELETE FROM users")
    conn.commit()

    # Insert sample users
    users = [
        ("alice_dev", "alice@example.com","hello","employer"),
        ("bob_coder", "bob@example.com","hello","employer"),
        ("eva_hiring", "eva@hire.com","hello","employer")
    ]
    cursor.executemany(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        users
    )

    # Insert sample jobs (linked to users)
    jobs = [
        ("Python Developer", "TechCorp Job as Python Dev", 1),
        ("Data Scientist", "DataWorks Job as Data Scientist", 2),
        ("Frontend Engineer", "WebDev Job as Frontend Engineer", 1),
        ("DevOps Specialist", "CloudCo Job as DevOps", 3)
    ]
    cursor.executemany(
        "INSERT INTO jobs (title, description, employer_id) VALUES (?, ?, ?)",
        jobs
    )

    conn.commit()
    conn.close()
    print("✅ Inserted 3 users and 4 jobs into the database!")

if __name__ == "__main__":
    insert_dev_data()