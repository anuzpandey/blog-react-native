import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                    category: action.payload.category,
                    createdDate: Date.now(),
                },
            ];
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

const addBlogPost = dispatch => {
    return (title, content, category, callback) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: { title, content, category } });
        console.log('Blog Saved!');
        callback ? callback() : null;
    };
};

const deleteBlogPost = dispatch => {
    return (id, callback) => {
        dispatch({ type: 'DELETE_BLOG_POST', payload: id });
        console.log('Blog Delete');
        // callback();
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, category, callback) => {
        dispatch({ type: 'EDIT_BLOG_POST', payload: { id, title, content, category } });
        console.log('Blog Updated');
        callback ? callback() : null;
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
    },
    [
        {
            id: Math.floor(Math.random() * 99999),
            title: 'Test Blog Post 1',
            content: 'This is a test post for development mode. This is a test post for development mode. This is a test post for development mode.',
            category: 'category',
        },
        {
            id: Math.floor(Math.random() * 99999),
            title: 'Test Blog Post 2',
            content: 'This is a test post for development mode. This is a test post for development mode. This is a test post for development mode.',
            category: 'category2',
        },
        {
            id: Math.floor(Math.random() * 99999),
            title: 'Test Blog Post 3',
            content: 'This is a test post for development mode. This is a test post for development mode. This is a test post for development mode. This is a test post for development mode. This is a test post for development mode. This is a test post for development mode.',
            category: 'category3',
        },
    ]);
