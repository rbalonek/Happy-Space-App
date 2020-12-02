import axios from "axios";

//KEY 2ccfaad1ef4c4946a0c23d70300c840e

export default axios.create({
  baseURL: "https://newsapi.org/v2/",
});

// https://newsapi.org/v2/top-headlines?country=us&apiKey=2ccfaad1ef4c4946a0c23d70300c840e
