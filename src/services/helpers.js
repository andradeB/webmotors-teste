const convert = async ({ get, model }, params) =>
  (await get(params)).map((item) => convertItem(item, model));

const convertItem = (item, { label, id }) => ({
  label: item[label],
  id: item[id],
});

export default { convert };
