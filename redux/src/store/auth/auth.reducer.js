import { updateValue } from "../../utils/localStorage";
import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes";
import { initialState } from "./auth.constants";
import {v4 as uuid} from "uuid"

export const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case USER_LOGIN: {
      let userToken = uuid()
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
