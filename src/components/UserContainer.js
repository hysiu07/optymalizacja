import React, { Component } from 'react';
import UsersList from './UsersList';
import '../App.css';

export default class UserContainer extends Component {
	state = {
		users: [],
	};
	fetchData = () => {
		fetch('https://randomuser.me/api/?results=10')
			.then((response) => response.json())
			.then((data) => this.setState({ users: data.results }))
			.catch((error) => console.error(error));
	};
	componentDidMount() {
		this.fetchData();
	}
	handleRefresh = () => {
		this.fetchData();
	};
	render() {
		const { users } = this.state;
		return (
			<div>
				<UsersList users={users} onRefresh={this.handleRefresh} />
			</div>
		);
	}
}
