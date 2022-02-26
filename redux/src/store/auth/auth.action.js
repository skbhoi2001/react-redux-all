import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes";

export const login = () => {
  return {
    type: USER_LOGIN
  };
};
export const logout = () => {
  return {
    type: USER_LOGOUT
  };
};
