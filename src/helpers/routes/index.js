export const postsPath = (id = ':id') => `/posts/${id}`;
export const editPostPath = (id = ':id') => `/posts/${id}/edit`;
export const createPostPath = () => '/newPosts';

export const aboutPath = () => '/about';
export const contactPage = () => '/contact';

export const createCommentPath = (id = ':id') => `/posts/${id}/comments`;
