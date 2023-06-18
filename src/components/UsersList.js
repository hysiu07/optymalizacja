import React, { Profiler, Suspense, useCallback, useMemo } from 'react';
import User from './User';
import Pagination from './Pagination';
import '../App.css';

// PROFILER API
const resultsPerPage = 5;

const Pagination = React.lazy(() => import('./Pagination'));

function UsersList({ users, onRefresh }) {
	const pagination = useMemo(
		() => ({
			page: 1,
			allPages: Math.ceil(users.length / resultsPerPage),
		}),
		[users]
	);
	function renderClb(
		id, // the "id" prop of the Profiler tree that has just committed
		phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
		actualDuration, // time spent rendering the committed update
		baseDuration, // estimated time to render the entire subtree without memoization
		startTime, // when React began rendering this update
		commitTime, // when React committed this update
		interactions // the Set of interactions belonging to this update
	) {
		console.log(id, phase, actualDuration, baseDuration);
	}
	const handleChange = useCallback(() => {
		console.log('useCallback');
	}, [users]);

	return (
		<div className='users'>
			<Profiler id='UserList' onRender={renderClb}>
				<button onClick={onRefresh}>refresh</button>
				<Suspense fallback={<p>Loading...</p>}>
					<Pagination
						page={pagination.page}
						allPages={pagination.allPages}
						handleChange={handleChange}
					/>
				</Suspense>
				{users.map((user) => {
					return <User key={user.login.uuid} user={user} />;
				})}
			</Profiler>
		</div>
	);
}
export default UsersList;
