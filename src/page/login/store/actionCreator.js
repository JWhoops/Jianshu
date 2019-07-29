import axios from "axios";
import * as actionType from "./actionType";

export const logout = () => ({
  type: actionType.LOGOUT,
  value: false
});

const changeLogin = () => ({
  type: actionType.CHANGE_LOGIN,
  value: true
});

export const login = (account, password) => {
  return dispatch => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登录失败");
        }
      })
      .catch(() => {
        alert("login error");
      });
  };
};
