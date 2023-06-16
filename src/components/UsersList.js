import React from 'react';
import User from './User';
import '../App.css';

function UsersList({ users, onRefresh }) {
	return (
		<div className='users'>
			<button onClick={onRefresh}>refresh</button>
			{users.map((user) => {
				return <User key={user.login.uuid} user={user} />;
			})}
		</div>
	);
}
export default UsersList;
