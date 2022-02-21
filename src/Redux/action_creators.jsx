import {Add_task , Delete_task , Search_tasks , Edit_task , Get_tasks}    from './actionsTypes'

// Create Actions Creators

export function  AddTask (data) {
    return {
        type: Add_task,
        payload: data
    }
} 

export function  EditTask(data) {
    return {
        type: Edit_task,
        payload:data
    }
}

export function DeleteTask(id) {
    return {
        type: Delete_task,
        payload: id
    }
}

export function SearchTasks(word) {
    return {
        type: Search_tasks,
        payload:word
    }
}


export function GetTasks() {
    return async (dispatch, getState) => {
        try {
            const call = await fetch("https://fakestoreapi.com/products");
            const data = await call.json();
            dispatch({
                type: Get_tasks,
                payload: data
            })
        } catch(err) {
            console.log(err);
        }
        
    }
}