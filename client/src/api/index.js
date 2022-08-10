import axios from 'axios';

// init axios instance

/**
 * Create new instance of axios with a custom config
 */

const api = axios.create({ baseURL: "http://localhost:8002" });


/* 
    * check if there is a token provided (localStorage ) before sending the request
    * if yes then use that token with every request
*/

api.interceptors.request.use(
    (req) => {
        if (localStorage.getItem("auth")) {
            req.headers.Authorization = `Bearer ${
                JSON.parse(localStorage.getItem("auth")).token
            }`;
        }
}
);

/**
 * Auth requests
 */
/**
 * 
 * @param {formValues} user 
 * @returns {Promise<JSON>}
 */
export const signup = (user) => api.post("/user/signup", user);

/**
 * 
 * @param {formValues} user 
 * @returns {Promise<JSON>}
 */
export const login = (user) => api.post("/user/signin", user);


/**
 * Post requests
 */
/**
 * 
 * @returns {Promise<JSON>}
 */
export const fetchPosts = () => api.get("/posts/getposts");

/**
 * 
 * @param {formValues} newPost 
 * @returns {Promise<JSON>}
 */
export const createPost = (newPost) => api.post("/posts/addpost", newPost);

/**
 * 
 * @param {ObjectId} id 
 * @param {formValues} updatedPost 
 * @returns {Promise<JSON>}
 */
export const updatePost = (id, updatedPost) => api.put(`/posts/editpost/${id}`, updatedPost);

/**
 * 
 * @param {ObjectId} id 
 * @returns {Promise<JSON>}
 */
export const likePost = (id) => api.put(`/posts/likepost/${id}`);

/**
 * 
 * @param {ObjectId} id 
 * @returns {Promise<JSON>}
 */
export const deletePost = (id) => api.delete(`/posts/removepost/${id}`);


export const fetchStories = () => api.get("/getstories");
export const createStory = (newStory) => api.post("/createstory", newStory);
export const updateStory = (id, updatedStory) =>
  api.put(`/updatestory/${id}`, updatedStory);
export const deleteStory = (id) => api.delete(`/deletestory/${id}`);
export const likeStory = (id) => api.put(`/likestory/${id}`);



