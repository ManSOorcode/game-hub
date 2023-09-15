import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "18e56c4d089140f09a9af7118ed5e52a",
  },
});
