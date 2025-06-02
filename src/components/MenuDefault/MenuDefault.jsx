import bin from "../../assets/Icon.png";
import check from "../../assets/Library add check.png";
export default function MenuDefault({
  list,
  toDoListisClicked,
  deleteTask,
  trashListisClicked,
  deleteForever,
  moveBackToToDo,
}) {
  function atLeastOneClick() {
    return list.some((item) => item.done);
  }
  return (
    <>
      {toDoListisClicked && atLeastOneClick() && (
        <button
          onClick={deleteTask}
          className="ml-[8%] mt-[1%] flex gap-[1rem] bg-[#E4E6E7] w-[20%]  rounded-[1rem]  pt-[1%] pb-[1%]  justify-start font-[Inter] font-medium"
        >
          {" "}
          <span>
            {" "}
            <img src={bin} alt="Image" />
          </span>
          Move to Trash
        </button>
      )}
      {trashListisClicked && atLeastOneClick() && (
        <div className="ml-[8%] mt-[1%] flex flex-col gap-[1rem] bg-[#E4E6E7] w-[22%]  rounded-[1rem]  pt-[1%] pb-[1%]  justify-start font-[Inter] font-medium">
          <button onClick={deleteForever} className="flex gap-[0.8rem]">
            {" "}
            <span>
              <img src={bin} alt="Image" />
            </span>{" "}
            Delete forever
          </button>
          <button onClick={moveBackToToDo} className="flex gap-[0.8rem]">
            <span>
              <img src={check} alt="Image" />
            </span>{" "}
            Move Back To To Do
          </button>
        </div>
      )}
    </>
  );
}
