import countriesData from "/src/data.json";

export const handleGetData = async () => {
  const response = await countriesData;
  return await response;
};
