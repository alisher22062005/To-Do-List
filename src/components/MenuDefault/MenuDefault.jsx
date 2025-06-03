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
          className="sm:ml-[8%] sm:mt-[1%] sm:p-[0] sm:flex sm:justify-start sm:gap-[1rem] bg-[#E4E6E7] sm:w-[20%] xs:w-[50%] xs:p-[2%] xs:mt-[2%]  rounded-[1rem]  sm:pt-[1%] sm:pb-[1%]   font-[Inter] font-medium"
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
        <div className="sm:ml-[8%] sm:mt-[1%] flex flex-col gap-[1rem] bg-[#E4E6E7] sm:w-[22%] xs:w-[65%] xs:mt-[2%]   rounded-[1rem]  sm:pt-[1%] sm:pb-[1%]  justify-start font-[Inter] font-medium">
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
