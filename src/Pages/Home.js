import { Form } from "../components/form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  EditTask,
  DeleteTask,
  GetTasks,
} from "../Redux/action_creators";
import { Input } from "../components/Input";
import { NoTasks } from "../components/noTasks";
export const Home = () => {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateTitle, setupdateTitle] = useState("");
  const [updateDescription, setupdateDescription] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(GetTasks());
  }, []);
  return (
    <>
      <h1 className="m-3 "> Task Reminder</h1>
      <Form
        title={title}
        description={description}
        search={search}
        setTitle={setTitle}
        setDescription={setDescription}
        setSearch={setSearch}
      />

      <div className=" col-md-6 col-sm-12  pt-4 m-auto ">
        {state.length ? (
          state.map((task, index) => {
            return (
              <div className="task" key={index}>
                <h4>
                  <span className="color">title:</span> {task.title}
                </h4>
                <h5>
                  <span className="color">description: </span>{" "}
                  {task.description}
                </h5>
                <form>
                  <Input setValue={setupdateTitle} holder="Title....." />
                  <Input
                    setValue={setupdateDescription}
                    holder="Description....."
                  />
                  <button
                    className="btn btn-success mb-1"
                    type="reset"
                    onClick={(e) => {
                      dispatch(
                        EditTask({
                          id: task.id,
                          title: updateTitle,
                          description: updateDescription,
                        })
                      );
                    }}
                  >
                    Update
                  </button>
                </form>
                <button
                  className="delete bg-danger"
                  onClick={() => {
                    dispatch(DeleteTask(task.id));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <NoTasks />
        )}
      </div>
    </>
  );
};
