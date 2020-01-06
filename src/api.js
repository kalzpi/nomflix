import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e772016806730de246e89ae3f93b7bfb",
    language: "en-US"
  }
});

api.get("movie/popular");

export default api;
