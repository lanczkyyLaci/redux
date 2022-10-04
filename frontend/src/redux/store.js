import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postSlice';

export default configureStore({
	reducer: {
		post: postsReducer
	}
});
