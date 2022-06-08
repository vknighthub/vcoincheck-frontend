import React from 'react';

export const GlobalFilter = ({ filter, setFilter, t }) => {
	return (
		<div>
			{t('search')} : {' '}
			<input className="ml-2 input-search form-control"
				value={filter || ''} onChange={e => setFilter(e.target.value)} style={{ width: "20%" }}
			/>
		</div>
	)
} 