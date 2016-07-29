/**
 * Created by Vladimir on 7/29/2016.
 */

var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	name: String,
	finished: Boolean,
	dateCreated: Date,
	dateFinished: Date
});

module.exports = mongoose.model("Task", taskSchema);