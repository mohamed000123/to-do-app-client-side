           
import {useSelector , useDispatch} from 'react-redux'            
import { AddTask, EditTask, DeleteTask, SearchTasks, GetTasks} from '../Redux/action_creators' 

export const Tasks = (props)=>{
   
  const state = useSelector((state)=>state)   //  >>>>>>>>>>>>>       useSelector      بياخد الاستيت وبيرجع اللى انا عايزه منها 
  console.log(state)
    return(
  
 
       <h1>hello world</h1>
      

 
    )
}
