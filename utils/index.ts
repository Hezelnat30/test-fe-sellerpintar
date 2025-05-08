import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";
import { CREDENTIAL } from "@/constants";

const setTokenCookie = (token: string): void => {
  const decodedToken = jwtDecode(token);
  const expires = decodedToken.exp! * 1000;
  Cookie.set(CREDENTIAL, token, { expires });
};

const getTokenCookie = () => {
  return Cookie.get(CREDENTIAL);
};

const removeTokenCookie = () => {
  return Cookie.remove(CREDENTIAL);
};

export { setTokenCookie, getTokenCookie, removeTokenCookie };
