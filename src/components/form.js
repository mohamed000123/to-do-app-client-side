import { Input } from "./Input";
export const InputForm = ({setTitle, setDescription, dispatch, AddTask, state, title, description})=>{
    return(
        <form  className='w-50   pt-4 m-auto  ' >
        <div className="mb-3  ">
        <Input  setValue={setTitle} holder="Title....." />
        </div>
        <div className="mb-3">
            <Input setValue={setDescription} holder="description ....." />
        </div>
        <button  className="btn btn-primary"   type='button'        
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
      </form>
    )
}