import React from 'react';

function Pagination({ page, allPages }) {
	return (
		<div>
			<p>
				Page: {page} / {allPages}
			</p>
		</div>
	);
}
export default Pagination;
