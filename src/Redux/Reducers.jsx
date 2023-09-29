import {
  Search_tasks,
  Get_tasks,
} from "./actionsTypes";

// Reducers

export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case Get_tasks:
      return action.payload;
    case Search_tasks:
      return action.payload;
    default:
      return state;
  }
};
