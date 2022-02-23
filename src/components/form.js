import { Input } from "./Input";
export const InputForm = ({setTitle, setDescription, dispatch, AddTask, state, title, description, setSearch, search, SearchTasks} )=>{
  
    return(
        <form   >
        <div className=" d-flex  justify-content-center m-auto">
        <input  className="form-control w-75  "  type="text" placeholder="search....."
        onChange={(event) => { setSearch(event.target.value);  }} 
         />
         <button  className="btn btn-primary"  type='reset'         
         onClick={() => {
          dispatch(
            SearchTasks({
              word:search
            })
          );
        }}>Search</button>
        </div>
        <div className='w-50   pt-4 m-auto  ' >
        <div className="mb-3  ">
        <Input  setValue={setTitle} holder="Title....." />
        </div>
        <div className="mb-3">
            <Input setValue={setDescription} holder="description ....." />
        </div>
        <button  className="btn btn-primary"   type='reset'        
         onClick={() => {
             let id ;
             if (state.length>0){
                id= state[state.length - 1].id + 1
             }
             else{
                 id=1
             }
          dispatch(
            AddTask({
              id: id ,
              title ,
              description,
            })
          );
        }}>add task</button>
        </div>
      </form>
    )
}