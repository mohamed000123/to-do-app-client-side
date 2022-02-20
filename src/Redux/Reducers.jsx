import {Add_task , Delete_task , Search_tasks , Edit_task , Get_tasks}    from './constants'

// Reducers

const tasks = [{
    id:1,
    title:"Learn React",
    description:"learn how to use react "
},{
    id:2,
    title:"Learn nodeJs",
    description:"learn how to use nodeJs "
},{
    id:1,
    title:"Learn Array Manipulation",
    description:"learn manipulate arrays"
}]
export const tasksReducer = (state = tasks, action) => {
    switch(action.type) {
        case Add_task:
            return state ;
        case Delete_task:
            return state
        case Search_tasks:
            return state ;
        case Edit_task:
            return state ;
        case Get_tasks:
            return state ;
        default:
            return state;
    }
}
