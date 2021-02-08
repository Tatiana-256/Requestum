import axios from "axios";

const dev = "https://api.github.com/search/repositories";

const request = axios.create({
  baseURL: dev,
});

export default request;
