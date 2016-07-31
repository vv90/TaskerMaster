import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/taskActions';

class ManageTaskPage extends React.Component {
	constructor(props, context) {
		super(props, context);

	}

	render() {
		return (
			<div>
				<h1>Manage Task</h1>
			</div>
		);
	}
}
ManageTaskPage.propTypes = {
	//myProp: PropTypes.object.isRequired;
};

function mapStateToProps(state, ownProps) {
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(taskActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);