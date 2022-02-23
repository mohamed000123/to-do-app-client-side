import { InputForm } from '../components/form'
import { useState  , useEffect,  } from 'react'           
import {useSelector , useDispatch} from 'react-redux'            
import { AddTask, EditTask, DeleteTask, SearchTasks, GetTasks} from '../Redux/action_creators' 
import { Input } from '../components/Input'

export const Home = ()=>{

let state = useSelector((state)=>state)
 const dispatch=useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateTitle, setupdateTitle ] = useState("");
  const [updateDescription, setupdateDescription] = useState("");
  const[search, setSearch] = useState("")

 useEffect ( ( )=>{
  dispatch(GetTasks())
  },[])
    return (
      <>
      <h1 className='m-3 '> Task Reminder</h1>
      <button  className="btn btn-primary ml-4 mb-4"          
      onClick={() => {
       dispatch(
         (GetTasks())
       );
     }}>All Tasks</button>
     <div className=' d-flex  justify-content-center'>
      <input  className="form-control w-75"  type="text" placeholder="search....."
      onChange={(event) => { setSearch(event.target.value);  }} 
       />
       <button  className="btn btn-primary"          
       onClick={() => {
        dispatch(
          SearchTasks({
            word:search
          })
        );
      }}>Search</button>
      </div>
      <InputForm setTitle={setTitle} setDescription={setDescription}  AddTask={AddTask}  
      dispatch={dispatch} state={state} title={title} description={description} />
  
    <div  className=' col-md-6 col-sm-12  pt-4 m-auto  '>
    
    {state.map((task,index) => {
      return (
       <div  className="displayTasks col-md-6 col-sm-12   p-5  m-auto " key={index}>
          <h4><span className='color'>title:</span> {task.title}</h4>
         <h5><span className='color'>description: </span> {task.description}</h5>
         <Input  setValue={setupdateTitle} holder="Title....." />
         <Input  setValue={setupdateDescription} holder="Description....." />
       <button className='bg-success'
         onClick={(e) => {
           dispatch( EditTask({  id: task.id, title: updateTitle, description:updateDescription  })   );
         }}
       >
         Update 
       </button>
       <button className='delete bg-danger'
       onClick={() => {
         dispatch(DeleteTask(task.id));
       }}
     >
       Delete 
     </button>
         </div>
          );
        })}
 </div>
 </>
    )
    }

