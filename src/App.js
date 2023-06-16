import React, { Component } from 'react';
import { UserContainer } from './components';
import './App.css';

export default class App extends Component {
	state = {
		show: false,
	};
	handleToggle = () => {
		this.setState({ show: !this.state.show });
	};
	render() {
		const { show } = this.state;
		return (
			<div className='App'>
				<button onClick={this.handleToggle}>toggle</button>
				{show && <UserContainer />}
			</div>
		);
	}
}
