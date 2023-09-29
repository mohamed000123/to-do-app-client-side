import notasks from "../assets/notfound.png"
export const NoTasks = () => {
  return (
    <>
      <h2 style={{ marginTop: "20px" }}>no tasks available</h2>
      <img
        style={{ width: "200px",height:"250px" }}
        src={notasks}
        alt="Image Description"
      />
    </>
  );
};
