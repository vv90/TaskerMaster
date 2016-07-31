/**
 * Created by Vladimir on 7/30/2016.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/taskActions';

const TaskList = function ({tasks}) {
	return (
		<ul className="task-list">
			{tasks.map((task, index)=> (
				<li key={index} className="task-item">
					<h1><Link to={`/tasks/${task._id}`}>{task.name || "no name"}</Link></h1>
					<h3>{task.dateCreated}</h3>
					<span>{task.finished ? task.dateFinished : "Not finished"}</span>
				</li>
			))}
		</ul>
	);
};
TaskList.propTypes = {
	tasks: PropTypes.array.isRequired
};

class TasksPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<h1>Tasks</h1>
				<TaskList tasks={this.props.tasks}/>
			</div>
		);
	}
}

TasksPage.propTypes = {
	tasks: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		tasks: state.tasks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(taskActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);