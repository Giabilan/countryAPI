import countriesData from "/public/data.json";
const data = countriesData;

export const handleGetData = async () => {
  const response = await data;
  return await response;
};
