import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
	return fetch('http://localhost:5000/products', {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	}).then((res) => res.json());
});

const postSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: null
	},
	extraReducers: {
		[getPosts.pending]: (state, action) => {
			state.loading = 'loading';
		},
		[getPosts.fulfilled]: (state, action) => {
			state.loading = 'success';
			state.posts = action.payload;
		},
		[getPosts.rejected]: (state, action) => {
			state.loading = 'fail';
		}
	}
});

export default postSlice.reducer;
