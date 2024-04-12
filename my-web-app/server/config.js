// server/config.js

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "admin_project",
  waitForConnections: true,
  connectionLimit: 1000,
  queueLimit: 0, 
  };
  
  module.exports = dbConfig;
  