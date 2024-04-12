// server/controllers/userController.js
const mysql = require('mysql');
const dbConfig = require('../config');

// Create connection pool
const pool = mysql.createPool(dbConfig);

const createUser = (req, res) => {
  const { username, phoneNumber, motherName } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO testuser(username, phone_number, mother_name) VALUES (?, ?, ?)`;
  pool.query(INSERT_USER_QUERY, [username, phoneNumber, motherName], (err, result) => {
    if (err) {
      console.error('Error inserting user: ', err);
      res.status(500).send('Error inserting user');
      return;
    }
    console.log('User inserted successfully');
    res.status(201).send('User inserted successfully');
  });
};

module.exports = {
  createUser
};
