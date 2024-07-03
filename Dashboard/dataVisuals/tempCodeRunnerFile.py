import json
import mysql.connector
from mysql.connector import Error
from datetime import datetime

# Define the path to the JSON file
json_path = r"C:\Users\sachi\OneDrive\Desktop\Data Dashboard\Dashboard\dataVisuals\jsondata.json"

# Load JSON data
try:
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print("JSON data loaded successfully.")
except FileNotFoundError:
    print(f"Error: The file {json_path} was not found.")
    exit()
except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")
    exit()

# Connect to MySQL database
try:
    con = mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",
        database="mydata",
        port=3306
    )
    if con.is_connected():
        print("Connected to MySQL database")
        cursor = con.cursor()

        # Insert data into the pre-existing table
        insert_query = """
        INSERT INTO datavisuals_data (end_year, intensity, sector, topic, insight, url, region, start_year, impact, added, published, country, relevance, pestle, source, title, likelihood)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        for item in data:
            # Handle null values or set defaults for integer fields
            end_year = int(item.get('end_year')) if item.get('end_year') else ""
            intensity = int(item.get('intensity')) if item.get('intensity') else ""
            start_year = int(item.get('start_year')) if item.get('start_year') else ""
            relevance = int(item.get('relevance')) if item.get('relevance') else None
            likelihood = int(item.get('likelihood')) if item.get('likelihood') else None

            record = (
                end_year,
                intensity,
                item.get('sector'),
                item.get('topic'),
                item.get('insight'),
                item.get('url'),
                item.get('region'),
                start_year,
                item.get('impact'),
                datetime.strptime(item.get('added'), '%B, %d %Y %H:%M:%S').date() if item.get('added') else None,
                datetime.strptime(item.get('published'), '%B, %d %Y %H:%M:%S').date() if item.get('published') else "",
                item.get('country'),
                relevance,
                item.get('pestle'),
                item.get('source'),
                item.get('title'),
                likelihood
            )
            cursor.execute(insert_query, record)

        con.commit()
        print("Data inserted successfully.")

except mysql.connector.Error as err:
    print(f"Error: {err}")
finally:
    if 'cursor' in locals():
        cursor.close()
    if con.is_connected():
        con.close()
        print("MySQL connection is closed")
