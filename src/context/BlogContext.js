import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BLOG_POSTS':
            return action.payload;
        // case 'ADD_BLOG_POST':
        //     return [
        //         ...state,
        //         {
        //             id: Math.floor(Math.random() * 99999),
        //             title: action.payload.title,
        //             content: action.payload.content,
        //             category: action.payload.category,
        //             createdDate: Date.now(),
        //         },
        //     ];
        case 'DELETE_BLOG_POST':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'EDIT_BLOG_POST':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            });
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'GET_BLOG_POSTS', payload: response.data });
        console.log('Blogs Get.');
    };
};

const addBlogPost = dispatch => {
    return async (title, content, category, callback) => {
        await jsonServer.post('/blogposts', { title, content, category });
        // dispatch({ type: 'ADD_BLOG_POST', payload: { title, content, category } });
        console.log('Blog Saved!');
        callback ? callback() : null;
    };
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'DELETE_BLOG_POST', payload: id });
        console.log(`Blog Id: ${id} Deleted`);
    };
};

const editBlogPost = dispatch => {
    return async (id, title, content, category, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content, category });
        dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, content, category } });
        console.log(`Blog Id: ${id} Updated`);
        callback ? callback() : null;
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        getBlogPosts,
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
    },
    [],
);
