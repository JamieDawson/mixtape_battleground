const express = require('express');
const app = express();
const mongoose = require('mongoose');
//var bodyParser = require('body-parser');

require('dotenv').config();

const routes = require('./routes/api');

const port = 8080;

const MONGO_URI = `mongodb+srv://jamdaw7893:${process.env.DB_PASSWORD}@mixtapebattleground.2wykn.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(express.json());
//app.use(express.urlencoded());
app.use('/', routes); //everything inside api will start with api.

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
