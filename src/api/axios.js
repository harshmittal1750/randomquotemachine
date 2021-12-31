import axios from "axios";
const baseURL = "https://quotes.rest";
const instance = new axios.create({
  baseURL: baseURL,
});

const getQuoteCategory = async () => {
  const res = await instance.get("/qod/categories?language=en&detailed=true");
  return res.data;
};

export { getQuoteCategory, baseURL };
