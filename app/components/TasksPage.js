/**
 * Created by Vladimir on 7/30/2016.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/taskActions';

const TaskList = function ({tasks}) {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Created</th>
					<th>Finished</th>
				</tr>
			</thead>
			<tbody>
			{tasks.map((task, index)=> (
				<tr key={index}>
					<td>{task.name}</td>
					<td>{task.dateCreated}</td>
					<td>{task.finished ? task.dateFinished : "Not finished"}</td>
				</tr>
			))}
			</tbody>
		</table>
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