/**
 * Created by Vladimir on 7/28/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();
var port = 8080;

var Task = require('./models/task');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var router = express.Router();

router.use(function (req, res, next) {
	console.log(req.method + ': ' + req.url);
	next();
});

router.get('/', function(req, res) {
	res.json({message: 'api is working'});
});

router.route('/task')
	.post(function(req, res){
		var task = new Task();
		task.name = req.body.name;
		task.finished = req.body.finished;
		task.dateCreated = req.body.dateCreated;
		task.dateFinished = req.body.dateFinished;

		task.save(function (err) {
			if (err)
				res.send(err);

			res.json({message: 'task created'});
		});
	})
	.get(function (req, res) {
		Task.find(function (err, tasks) {
			if (err)
				res.send(err);

			res.json(tasks);
		});
	});

router.route('/task/:taskId')
	.get(function (req, res) {
		Task.findById(req.params.taskId, function (err, task) {
			if (err)
				res.send(err);

			res.json(task);
		});
	})
	.put(function (req, res) {
		Task.findById(req.params.taskId, function (err, task) {
			if (err)
				res.send(err);

			task.name = req.body.name;
			task.finished = req.body.finished;
			task.dateCreated = req.body.dateCreated;
			task.dateFinished = req.body.dateFinished;

			task.save(function (err) {
				if (err)
					res.send(err);

				res.json({message: 'Task updated'});
			});
		});
	})
	.delete(function (req, res) {
		Task.remove({
			_id: req.params.taskId
		}, function (err, task) {
			if (err)
				res.send(err);

			res.json({message: 'Task removed'});
		});
	});

mongoose.connect('mongodb://localhost/TaskerMaster');

app.use('/api', router);
app.get('/', function(req, res) {
	res.json({message: 'It works'});
});

app.listen(port);
console.log('server started on port ' + port);