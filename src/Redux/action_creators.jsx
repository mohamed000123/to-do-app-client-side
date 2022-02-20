import {Add_task , Delete_task , Search_tasks , Edit_task , Get_tasks}    from './constants'

// Create Actions Creators

export function  AddTask () {
    return {
        type: Add_task,
    }
} 

export function  EditTask() {
    return {
        type: Edit_task,
    }
}

export function DeleteTask() {
    return {
        type: Delete_task
    }
}


export function SearchTasks() {
    return async (dispatch, getState) => {
        try {
            const call = await fetch("https://fakestoreapi.com/products");
            const data = await call.json();
            dispatch({
                type: Search_tasks,
                payload: data
            })
        } catch(err) {
            console.log(err);
        }
        
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