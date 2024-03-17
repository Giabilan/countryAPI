export const getInitialDarkMode = () => {
  const localDarkMode = window.localStorage.getItem("darkMode");
  return localDarkMode ? JSON.parse(localDarkMode) : false;
};
