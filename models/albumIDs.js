const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumIdSchema = new Schema({
	album_id_first: {type: String},
	album_id_second: {type: String},
	album_id_thrid: {type: String},
});

const albumModel = mongoose.model('albumidsets', albumIdSchema);

module.exports = albumModel;
