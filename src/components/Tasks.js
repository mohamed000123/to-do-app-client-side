import { useState , Fragment } from 'react'           
import {useSelector , useDispatch} from 'react-redux'            
import { AddTask, EditTask, DeleteTask, SearchTasks, GetTasks} from '../Redux/action_creators' 

export const Home = (props)=>{
   
const state = useSelector((state)=>state)
 const dispatch=useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateTitle, setupdateTitle ] = useState("");
  const [updateDescription, setupdateDescription] = useState("");
  const[search, setSearch] = useState("")

    return(
          <>
      <h1 className='mb-3'> Task Reminder</h1>
      <div>
      <input  className="form-control w-75 m-auto"  type="text" placeholder="search....."
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

      <form  className='w-50   pt-4 m-auto  '>
      <div className="mb-3  ">
        <input  className="form-control"  type="text" placeholder="title..."
        onChange={(event) => { setTitle(event.target.value);  }} 
         />
      </div>
      <div className="mb-3">
 
        <input  type="text" placeholder="description..."
        onChange={(event) => { setDescription(event.target.value); }} className="form-control"
         />
      </div>
      <button  className="btn btn-primary"   type='button'        
       onClick={() => {
        dispatch(
          AddTask({
            id: state[state.length - 1].id + 1,
            title ,
            description,
          })
        );
      }}>add task</button>
    </form>

<div  className=' col-md-6 col-sm-12  pt-4 m-auto  '>

{state.map((task,index) => {
 return (
   <div  className="displayTasks col-md-6 col-sm-12   p-5  m-auto " key={index}>
     <h4>title: {task.title}</h4>
     <h5>description: {task.description}</h5>


     <input
     type="text"
     placeholder="title"
     onChange={(event) => {
       setupdateTitle(event.target.value);
     }}
   />
   <input
   type="text"
   placeholder="description"
   onChange={(event) => {
     setupdateDescription(event.target.value);
   }}
 />
   <button className='bg-success'
     onClick={() => {
       dispatch( EditTask({ index:index  ,  data: { id: state[index].id, title: updateTitle, description:updateDescription } })   );
     }}
   >
     Update 
   </button>
   <button className='delete bg-danger'
   onClick={() => {
     dispatch(DeleteTask(state[index].id));
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

