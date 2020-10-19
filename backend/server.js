const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // To have enviroment variables in dotenv file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Cors Middleware. Added to all paths or globally
app.use(express.json()); // Allows to parse JSON since server will be sending and receiving JSON

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => { // Once connection is set to open. Run the code in function
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter); // Middleware added to specific path
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});