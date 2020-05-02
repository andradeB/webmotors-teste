import http from "./http";
const URL = "Version";

export default {
  model: {
    label: "Name",
    id: "ID",
  },
  get: async (ModelId) => (await http.get(URL, { params: { ModelId } })).data,
};
