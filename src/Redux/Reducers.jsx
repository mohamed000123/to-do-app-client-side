import {Add_task , Delete_task , Search_tasks , Edit_task, Get_tasks }    from './actionsTypes'

// Reducers

export const tasksReducer = (state=[],  action) => {
    switch(action.type) {
        case Get_tasks:
            return action.payload
        case Add_task:     
            return action.payload
        case Delete_task:
            return action.payload
        case Search_tasks:
        return action.payload   
        case Edit_task:
            return action.payload
        default:
            return state;
    }
}
