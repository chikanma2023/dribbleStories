import { createSlice } from "@reduxjs/toolkit";

const blogPostSlice = createSlice({
  name: "blogPosts",
  initialState: { posts: [], isLoading: false, error: "" },
  reducers: {
    getPostsAction: (state, action) => {
      if (action.payload) {
        const { data, error, isLoading } = action.payload;
        state.posts = data;
        (state.isLoading = isLoading), (state.error = error);
      }
    },
    deletepostAction: (state, action) => {
      if (action.payload) {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      }
    },
  },
});

export const { getPostsAction, deletepostAction } = blogPostSlice.actions;
export default blogPostSlice.reducer;
