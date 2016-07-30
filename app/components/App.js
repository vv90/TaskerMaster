/**
 * Created by Vladimir on 7/30/2016.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = (props) => {
	return (
		<nav className="nav">
			<IndexLink to="/" className="nav-item" activeClassName="nav-item-active">Home</IndexLink>
			<Link to="/tasks" className="nav-item" activeClassName="nav-item-active">Tasks</Link>
		</nav>
	);
};

class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<Header />
				<div className="view-container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;