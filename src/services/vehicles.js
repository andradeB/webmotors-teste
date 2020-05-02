import http from "./http";
const URL = "Version";

export default {
  model: {
    label: "Name",
    id: "ID",
  },
  get: async (Page) => (await http.get(URL, { params: { Page } })).data,
};
