/**
 * Created by Vladimir on 7/30/2016.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './actions/taskActions';

class TasksPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			task: {name: null}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const task = this.state.task;
		task.name = event.target.value;
		this.setState({task: task});
	}

	onClickSave() {
		this.props.actions.createTask(this.state.task);
	}

	_taskRow(task, index) {
		return (
			<div key={index}>{task.name}</div>
		);
	}

	render() {
		return (
			<div>
				<h1>Tasks</h1>
				{this.props.tasks.map(this._taskRow)}
				<h2>Add Task</h2>
				<input type="text"
				       onChange={this.onTitleChange}
				       value={this.state.task.title} />
				<input type="submit"
				       value="Save"
				       onClick={this.onClickSave} />
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