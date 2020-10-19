const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // To have enviroment variables in dotenv file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Cors Middleware
app.use(express.json()); // Allows to parse JSON since server will be sending and receiving JSON

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => { // Once connection is set to open. Run the code in function
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});