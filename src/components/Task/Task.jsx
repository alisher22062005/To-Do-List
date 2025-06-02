import icon from "../../assets/Icon Menu.png";

export default function Task({ task, doneTask, trashListisClicked }) {
  // const [checked,setchecked]=useState(true)

  return (
    <>
      <div className="flex gap-[0.7rem] ml-[7%] mt-[1%] w-[35%] hover:bg-[#E4E6E7]  p-[0.3rem]">
        <img className="ml-[0.5rem]" src={icon}></img>
        <input
          // checked={task.done}
          className=" flex justify-center "
          type="checkbox"
          checked={task.done}
          onChange={() => {
            doneTask(task);
          }}
        ></input>
        {/* <input
          // checked={task.done}
          className=" flex justify-center "
          type="checkbox"
          checked={task.done}
          onChange={() => {
            doneTask(task);
          }}
        ></input> */}

        <div
          className={task.done ? "line-through" : ""}
          // className={`${
          //   task.done ? "line-through" : ""
          // } break-words w-full bg-blue-300`}
        >
          {task.name}
        </div>
      </div>
    </>
  );
}
