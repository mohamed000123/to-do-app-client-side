import { tasksReducer } from "./Reducers";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(tasksReducer, applyMiddleware(thunk));
