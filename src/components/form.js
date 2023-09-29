import { Input } from "./Input";
import { useSelector, useDispatch } from "react-redux";
import {
  AddTask,
  SearchTasks,
} from "../Redux/action_creators";
export const Form = ({
  setTitle,
  setDescription,

  title,
  description,
  setSearch,
  search,
}) => {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <form>
      <div className=" d-flex  justify-content-center m-auto">
        <input
          className="form-control w-75  "
          type="text"
          placeholder="search....."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          type="reset"
          onClick={() => {
            dispatch(
              SearchTasks({
                word: search,
              })
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="w-50   pt-4 m-auto  ">
        <div className="mb-3  ">
          <Input setValue={setTitle} holder="Title....." />
        </div>
        <div className="mb-3">
          <Input setValue={setDescription} holder="description ....." />
        </div>
        <button
          className="btn btn-primary"
          type="reset"
          onClick={() => {
            dispatch(
              AddTask({
                title,
                description,
              })
            );
          }}
        >
          add task
        </button>
      </div>
    </form>
  );
};
