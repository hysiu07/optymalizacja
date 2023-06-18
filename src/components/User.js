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
// class User extends Component {
// 	shouldComponentUpdate(nextProps, nextState) {
// 		if (this.props.user.login.uuid === nextProps.user.login.uuid) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// 	render() {
// 		const { user } = this.props;
// 		return (
// 			<div className='users__user'>
// 				<div className='users__user-name'>{user.name.first}</div>
// 				<div className='users__user-surname'>{user.name.last}</div>
// 			</div>
// 		);
// 	}
// }
export default React.memo(User);
