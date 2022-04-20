import axios from "axios";
const ADD_NUM = "add_num";
const GET_DATA = "get_data";

export const changeNum = (payload) => {
  return {
    type: ADD_NUM,
    payload,
  };
};

export const getData = () => {
  return (dispatch) => {
    axios({
      url: "http://lzstation_new.test.ccchong.com:8086//api/home/statistics?locale=zh",
      method: "post",
      data: { page: 1, pagecount: 10 },
      headers: {
        Authorization:
          "e30=.eyJpZCI6MSwiYWNjb3VudCI6ImFkbWluIiwicGFzc3dvcmQiOm51bGwsIm5hbWUiOiJhZG1pbiIsInBob25lIjpudWxsLCJqb2JOdW1iZXIiOm51bGwsImVtYWlsIjpudWxsLCJ1c2VySWQiOiJhMjViMzNmMy1mMmRmLTQ0ZGYtYjVhZC0xM2NlOTZiYjJlMzMiLCJzdGF0dXMiOjEsInZpcnR1YWxCYWxhbmNlIjowLjAwLCJwb3dlciI6MC4wMCwiY2hhcmdlRWxlY3RyaWMiOjAuMDAsImxhc3RMb2dpblRpbWUiOiIyMDIyLjA0LjIwIDEwOjQ0OjQwIiwiY3JlYXRlQWNjb3VudElkIjoxLCJjcmVhdGVUaW1lIjoiMjAyMC4wNS4xOCAxNjo1Njo1OSIsInVwZGF0ZVRpbWUiOiIyMDIyLjA0LjIwIDEwOjQ0OjQwIiwiY29tcGFueUlkIjoiTUE3MzBMOUw5Iiwic3RhclR5cGUiOjAsImNoYXJnZUxpbWl0VHlwZSI6MCwiY2hhcmdlTGltaXQiOjAuMDAsImNoYXJnZVRpbWVUeXBlIjowLCJjaGFyZ2VUaW1lIjoiIiwiY2FySWQiOm51bGwsImV4cCI6bnVsbCwiaXAiOiIzNi4xNTIuOTkuMzQiLCJtZW51TGlzdCI6bnVsbCwiYnV0dG9uTGlzdCI6bnVsbH0=.30a9e66435a18c99d472d9481b5c85188e6ef76343ed27b163b90dc2f9c51c31",
        authJWT:
          "e30=.eyJpZCI6MSwiYWNjb3VudCI6ImFkbWluIiwicGFzc3dvcmQiOm51bGwsIm5hbWUiOiJhZG1pbiIsInBob25lIjpudWxsLCJqb2JOdW1iZXIiOm51bGwsImVtYWlsIjpudWxsLCJ1c2VySWQiOiJhMjViMzNmMy1mMmRmLTQ0ZGYtYjVhZC0xM2NlOTZiYjJlMzMiLCJzdGF0dXMiOjEsInZpcnR1YWxCYWxhbmNlIjowLjAwLCJwb3dlciI6MC4wMCwiY2hhcmdlRWxlY3RyaWMiOjAuMDAsImxhc3RMb2dpblRpbWUiOiIyMDIyLjA0LjIwIDEwOjQ0OjQwIiwiY3JlYXRlQWNjb3VudElkIjoxLCJjcmVhdGVUaW1lIjoiMjAyMC4wNS4xOCAxNjo1Njo1OSIsInVwZGF0ZVRpbWUiOiIyMDIyLjA0LjIwIDEwOjQ0OjQwIiwiY29tcGFueUlkIjoiTUE3MzBMOUw5Iiwic3RhclR5cGUiOjAsImNoYXJnZUxpbWl0VHlwZSI6MCwiY2hhcmdlTGltaXQiOjAuMDAsImNoYXJnZVRpbWVUeXBlIjowLCJjaGFyZ2VUaW1lIjoiIiwiY2FySWQiOm51bGwsImV4cCI6bnVsbCwiaXAiOiIzNi4xNTIuOTkuMzQiLCJtZW51TGlzdCI6bnVsbCwiYnV0dG9uTGlzdCI6bnVsbH0=.30a9e66435a18c99d472d9481b5c85188e6ef76343ed27b163b90dc2f9c51c31",
      },
    }).then((res) => {
      console.log(res);
      if (res.data.code === "200") {
        dispatch(changeNum(res.data.data));
      }
    });
  };
};
