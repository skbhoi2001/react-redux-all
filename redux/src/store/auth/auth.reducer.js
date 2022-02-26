import { updateValue } from "../../utils/localStorage";
import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes";
import { initialState } from "./auth.constants";

export const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case USER_LOGIN: {
      let userToken = "ABCD";
      updateValue("userToken", userToken);
      return {
        ...state,
        isUserLoggedIn: true,
        userToken: userToken
      };
    }
    case USER_LOGOUT: {
      updateValue("userToken", "");
      return {
        ...state,
        isUserLoggedIn: false,
        userToken: ""
      };
    }
    default: {
      return state;
    }
  }
};
