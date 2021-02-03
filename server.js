const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const port = 8080;

const MONGO_URI = `mongodb+srv://jamdaw7893:${process.env.DB_PASSWORD}@mixtapebattleground.2wykn.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const AlbumIDSchema = new Schema({
	title: String,
	author: String,
	data: {
		type: String,
		default: Date.now(),
	},
});

const AlbumIDSet = mongoose.model('AlbumIDSet', AlbumIDSchema);

const test = {
	title: '123',
	author: '444',
};

const updateAlbumIDSet = AlbumIDSet(test);

updateAlbumIDSet.save((error) => {
	if (error) {
		console.log('Error happened oh no!!!');
	} else {
		console.log('Data has been saved');
	}
});

app.get('/', (req, res) => {
	res.send('Hello World!!!!');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
