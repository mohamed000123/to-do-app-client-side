import {Add_task , Delete_task , Search_tasks , Edit_task }    from './actionsTypes'

// Reducers

export const tasks =  [
    {
    id:1,
    title:"Learn React",
    description:"learn how to use react "
},
{
    id:2,
    title:"Learn nodeJs",
    description:"learn how to use nodeJs "
},
{
    id:3,
    title:"Learn Array Manipulation",
    description:"learn manipulate arrays"
}
]
export const tasksReducer = (state = tasks, action) => {
    switch(action.type) {
        case Add_task:
            console.log(action.payload , state)
           
            return [action.payload, ...state]
        case Delete_task:
            console.log(state)
            return   state.filter((task) => task.id !== action.payload);
        case Search_tasks:
                  const searched= state.filter((task) => {
                if (task.title.toUpperCase().includes(action.payload.word.toUpperCase()) || task.description.toUpperCase().includes(action.payload.word.toUpperCase()) ) {
                    return true
                  }  
                else {
                    return false
                }  }   );
          return searched
             
        case Edit_task:
           
            state.map((task) => {
                console.log(state)
              
                if (task.id === action.payload.data.id) {
                  task.title = action.payload.data.title;
                  task.description= action.payload.data.description;
                  console.log(state)
                }
 
              }); 
              return state
        
        //     console.log(state , action.payload.data) ;
        //     const newState= (state)=>{
        //         state[action.payload.index] = action.payload.data ; 
        //         return state
        //     }
        //     console.log(state , action.payload.data);
            
        //    return  newState(state)
      
        default:
            return state;
    }
}
