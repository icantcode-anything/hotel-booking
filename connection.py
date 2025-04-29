import mysql.connector
from mysql.connector import Error


db_config = {
    'port':'3307', #change port number kung ano port num nyo
    'host': 'localhost',
    'user': ' root',         
    'password': '',          
    'database': 'hotel_database'
}


def get_connection():
    try:
        connection= mysql.connector.connect(**db_config)
        if (connection.is_connected()):
            return connection
    except Error as e:
        print(f'error while connecting to database: {e}')
        return None