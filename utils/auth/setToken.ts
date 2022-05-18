const setToken = (token: string) => {
  setCookie("token", token);
};

const setCookie = (cookie: string, value: String) => {
  document.cookie = `${cookie}=${value}`;
};

export default setToken;
export { setCookie };
