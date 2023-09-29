import {
  Search_tasks,
  Get_tasks,
} from "./actionsTypes";

// Create Actions Creators
export function GetTasks() {
  return async (dispatch) => {
    try {
      const call = await fetch("http://localhost:3000");
      const data = await call.json();
      dispatch({
        type: Get_tasks,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function AddTask(data) {
  return async (dispatch) => {
    try {
        await fetch(`http://localhost:3000`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(GetTasks());
    } catch (err) {
      console.log(err);
    }
  };
}

export function EditTask(data) {
  return async (dispatch, getState) => {
    try {
      const title = data.title;
      const description = data.description;
      const update = { title, description };
      await fetch(`http://localhost:3000/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(update),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(GetTasks());
    } catch (err) {
      console.log(err);
    }
  };
}

export function DeleteTask(id) {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:3000/${id} `, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(GetTasks());
    } catch (err) {
      console.log(err);
    }
  };
}

export function SearchTasks(word) {
  return async (dispatch, getState) => {
    try {
      const call = await fetch(`http://localhost:3000/${word.word}`);
      const data = await call.json();
      dispatch({
        type: Search_tasks,
        payload: data ? data : getState,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
