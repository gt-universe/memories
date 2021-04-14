import axios from "axios";
/* 
const axiosInstance = axios.create({
	baseURL: "http://localhost:5000",
});
 */

const axiosInstance = axios.create({
	baseURL: "https://gt-memories.herokuapp.com/",
});
axiosInstance.defaults.headers.common["Client-App"] = "memories-web";

axiosInstance.interceptors.request.use((request) => {
	console.log("-------------------Request--------------------");
	console.log(request);
	return request;
});

axiosInstance.interceptors.response.use((response) => {
	console.log("-------------------Response--------------------");
	console.log(response);
	return response.data;
});

export default axiosInstance;
