import http from "./http";
const URL = "Vehicles";

export default {
  model: {
    label: "Name",
    id: "ID",
  },
  get: async (Page) => (await http.get(URL, { params: { Page } })).data,
};
