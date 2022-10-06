import {GET_POSTS} from "../actions/actions";

export const postsReducer = (state= {posts: []}, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {...state, posts: action.payload};
		default:
			return state;
	}
};