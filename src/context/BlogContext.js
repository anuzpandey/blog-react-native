import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post #${state.length + 1}`,
                    content: `This is a Blog Post #${state.length + 1}. Being a Blog Post #${state.length + 1} its very awesome. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. `,
                    category: 'category#',
                    createdDate: Date.now()
                },
            ];
        case 'DELETE_BLOG_POST':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'ADD_BLOG_POST' });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOG_POST', payload: id });
    };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);
