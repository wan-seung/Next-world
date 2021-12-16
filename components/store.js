// store.js

import { createStore, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import reducer from "./todo";

// const combinedReducer = combineReducers({ todo });
// // create your reducer
// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     if (state.count) nextState.count = state.count; // preserve count value on client side navigation
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

// create a makeStore function
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
