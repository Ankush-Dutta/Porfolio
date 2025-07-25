from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
import csv

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Database file path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_FILE = os.path.join(BASE_DIR, 'contact_messages.db')

# Ensure database and table exist
def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    # Store in SQLite database
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO messages (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    """, (name, email, subject, message))
    conn.commit()
    conn.close()

    # Also write to CSV for Excel
    CSV_FILE = os.path.join(BASE_DIR, 'contact_messages.csv')
    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['Name', 'Email', 'Subject', 'Message'])
        writer.writerow([name, email, subject, message])

    print("✅ Message saved locally (DB + CSV):")
    print(f"Name: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}\n")

    return jsonify({"status": "success", "message": "Message received and stored locally!"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)