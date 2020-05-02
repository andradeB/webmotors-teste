import http from "./http";
const URL = "Make";

export default {
  model: {
    label: "Name",
    id: "ID",
  },
  get: async () => (await http.get(URL)).data,
};
