const express = require("express");
const routes = require("./routes/route");
const authRoutes = require("./routes/authRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
const {logRequests, errorHandler} = require("./middlewares/errorHandling");
// Load environment variables
require('dotenv').config();

// Initialize the app
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(logRequests);

// use error middleware
app.use(errorHandler);

// Serve Static Files
app.use(express.static(path.join(__dirname, "public"))); 

// Connect to MongoDB
connectDB();

// Routes
app.use('/', routes);
app.use('/auth/notes', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});