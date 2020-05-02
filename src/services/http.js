import axios from "axios";

const http = axios.create({
  baseURL: "http://desafioonline.webmotors.com.br/api/OnlineChallenge",
  headers: {
    Accept: "application/json",
  },
});

export default http;
