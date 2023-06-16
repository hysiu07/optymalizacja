import React from 'react';
import '../App.css';
function User({ user }) {

	return (
		<div className='users__user'>
			<div className='users__user-name'>{user.name.first}</div>
			<div className='users__user-surname'>{user.name.last}</div>
		</div>
	);
}
export default User;
