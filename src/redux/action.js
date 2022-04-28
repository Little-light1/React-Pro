import axios from "axios";
const ADD_NUM = "add_num";
const SET_DATA = "set_data";

export const changeNum = (payload) => {
  return {
    type: ADD_NUM,
    payload,
  };
};
export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

const promiseTest = new Promise((res, rej) => {
  res({
    data: {
      carName: "奥迪",
      model: "S4",
      price: "480000￥",
    },
  });
});

export const getData = () => {
  return (dispatch) => {
    promiseTest.then((res) => {
      if (res.data) {
        dispatch(setData(res.data));
      }
    });
  };
};
