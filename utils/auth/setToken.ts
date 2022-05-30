const setToken = (token: string) => {
  setCookie("token", token, `${60 * 60}`);
};

const checkToken = () => {
  const cookies = document.cookie.split("; ");
  const token = cookies?.filter((cookie) => cookie.startsWith("token="));
  const value = token[0]?.split("=")[1];
  return value;
};

const setCookie = (cookie: string, value: string, expiration?: string) => {
  document.cookie = `${cookie}=${value}${
    expiration ? `; max-age=${expiration}` : ""
  }`;
};

export default setToken;
export { setCookie, checkToken };
