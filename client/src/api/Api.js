import axiosInstance from "../core/interceptor/interceptor";

export const fetchPosts = () => axiosInstance.get("/post");
export const createPost = (post) => axiosInstance.post("/post", post);
export const updatePost = (post) => axiosInstance.put(`/post/${post._id}`, post);
