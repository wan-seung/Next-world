import { HYDRATE } from "next-redux-wrapper";

// ducks pattern

// action Type
const TODO_CREATE = "todo/CREATE";
const TODO_DELETE = "todo/DELETE";
const TODO_UPDATE = "todo/UPDATE";

// action
export const todoCreate = (item) => ({ type: TODO_CREATE, item });
export const todoDelete = (item) => ({ type: TODO_DELETE, item });
export const todoUpdate = (item) => ({ tpye: TODO_UPDATE, item });

// initialState
const initialState = {
  list: [
    {
      id: 0,
      title: "장보기",
    },
    {
      id: 1,
      title: "요리하기",
    },
    {
      id: 2,
      title: "설거지하기",
    },
  ],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_CREATE:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
      break;
    case TODO_DELETE:
      return {
        ...state,
        list: state.list.filter((object) => object.id !== action.item.id),
      };
      break;
    case TODO_UPDATE:
      break;
    default:
      return state;
  }
};

export default reducer;
