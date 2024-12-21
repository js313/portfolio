import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env[
      "REACT_APP_" + process.env.NODE_ENV?.toUpperCase() + "_BACKEND_URI"
    ],
});

export default axiosInstance;
