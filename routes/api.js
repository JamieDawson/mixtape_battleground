const express = require('express');
const router = express.Router();
const albumModel = require('../models/albumIDs');

//get the data from mongodb.
router.get('/getAllData', (req, res) => {
	albumModel
		.find()
		.then((data) => {
			console.log('data: ', data);
			res.json(data);
		})
		.catch((error) => {
			console.log('error: ', error);
		});
});

//get specific document by ID
router.get('/:id', (req, res) => {
	albumModel
		.findById(req.params.id)
		.then(() => res.json('found by the ID!'))
		.catch((err) => res.status(400).json('Error ' + err));
});

//update the values
router.post('/update/:id', (req, res) => {
	console.log('called?');
	albumModel
		.findById(req.params.id)
		.then((albumStuff) => {
			if (req.body.theKey) {
				if (req.body.theKey == 'album_id_first') {
					albumStuff.album_id_first = req.body.theValue;
				}
				if (req.body.theKey == 'album_id_second') {
					albumStuff.album_id_second = req.body.theValue;
				}
				if (req.body.theKey == 'album_id_thrid') {
					console.log('www');
					albumStuff.album_id_thrid = req.body.theValue;
				}
			}

			albumStuff
				.save()
				.then(() => res.json('updated album stuff'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
});

//A test to make sure express is working
router.get('/test', function (req, res) {
	res.json({
		msg: 'we got data',
	});
});

module.exports = router;
