import axios from "axios";
import { put, takeEvery, all } from "redux-saga/effects";
import { FETCH_DATA, setData } from "./reducer";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* axiosGetAsync(action) {
  const { payload } = action;
  // let temp;
  console.log("TCL: function*axiosGetAsync -> action", action);
  axios(payload)
    .then(res => {
      console.log("TCL: function*axiosGetAsync -> res.data", res.data);
      // put({ type: SET_DATA, data: res.data });
      put(setData(res.data));
      // temp = res.data;
      console.log("finished SET_DATA");
    })
    .catch(error => {
      console.log("TCL: function*axiosGetAsync -> error", error);
    });
  // yield put(setData(temp));
}

export function* watchAxiosGetAsync() {
  yield takeEvery(FETCH_DATA, axiosGetAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchAxiosGetAsync()]);
}
