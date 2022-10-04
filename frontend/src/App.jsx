import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/features/postSlice';

import Card from './components/card/Card';

function App() {
	const { posts, loading } = useSelector((state) => state.post);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts());

		console.log(posts);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading === 'loading') {
		return (
			<React.Fragment>
				<div>
					<h2>Loading...</h2>
				</div>
			</React.Fragment>
		);
	}

	if (loading === 'fail') {
		return (
			<React.Fragment>
				<div>
					<h2>fail...</h2>
				</div>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<div>
				<Card posts={posts} />

				{posts.map((item, index) => (
					<div key={index}>
						<h5>{item._id}</h5>
						<h4>{item.name}</h4>
					</div>
				))}
			</div>
		</React.Fragment>
	);
}

export default App;
