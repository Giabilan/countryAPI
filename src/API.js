import countriesData from "/public/data.json";

export const handleGetData = async () => {
  const response = await countriesData;
  return await response;
};
