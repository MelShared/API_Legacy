import mysql from "mysql"

export const db = mysql.createPool({
  host: process.env.host ||'sql10.freesqldatabase.com',
  user: process.env.user||'sql10630077',
  password: process.env.password||'PLxe5fCgQd',
  database: process.env.database||'sql10630077',
  });
  
  
  // // Test the database connection
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
    } else {
      console.log('Connected to the database.');
      connection.release();
    }
  });

