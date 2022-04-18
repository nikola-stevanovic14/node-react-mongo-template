const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("config");
const userRouter = require('./routes/userRouter')

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    config.mongodb.uri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.use('/api/users', userRouter)

app.listen(port, () => console.log(`API listening on port ${port}!`));