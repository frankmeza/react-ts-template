import { put, call } from "redux-saga/effects";
import { takeEveryAsync } from "saga-toolkit";
import * as actions from "store/slices/counter";

interface IncrementByNumberParams {
    addend: number;
}

export function* incrementByNumber(params: IncrementByNumberParams) {
    const { addend } = params;
    actions.incrementByAmount(addend);
}

export default [
    takeEveryAsync(actions.incrementByNumberSaga.type, incrementByNumber),
];

// function* appStart() {
//   const promise = yield put(fetchThings({ someArg: 'example' }))
//   try {
//     const fetchThingsActionFulfilled = yield promise // optionally we can wait for an action to finish and get its result
//   } catch(error) {
//     // we can handle error to avoid appStart to get rejected if we want
//   }
//   return result
// }
