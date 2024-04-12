const express = require('express');
const cors = require('cors');
const app = express(),
bodyParser = require("body-parser");
;
const path = require('path');
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-web-app/client/build/"));
// Import routes
const userRoutes = require('./routers/UserRoutes');

// Middleware
app.use(express.json()); // This is needed to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Use routes
app.use('/api', userRoutes); // This will prefix all routes in userRoutes with '/api'

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/my-web-app/client/build/index.html");
});
// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
