import http from "./http";
const URL = "Model";

export default {
  model: {
    label: "Name",
    id: "ID",
  },
  get: async (MakeId) => (await http.get(URL, { params: { MakeId } })).data,
};
