import request from "./API-settings";

export const getSearchRepo = (search: string) => {
  return request
    .get(``, {
      params: {
        q: search,
      },
    })
    .then((res) => {
      console.log(res.data.items);
      return res.data.items;
    })
    .catch(() => {
      return "error";
    });
};
