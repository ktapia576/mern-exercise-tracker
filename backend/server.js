const express = require('express');
const cors = require('cors');

require('dotenv').config(); // To have enviroment variables in dotenv file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Cors Middleware
app.use(express.json()); // Allows to parse JSON since server will be sending and receiving JSON

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});