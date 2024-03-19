import React from "react";
import { useState, useEffect } from "react";
import tasksApi from "../../api/tasksApi";
import UpdateStatus from "../UpdateStatusComponent/UpdateStatus";
import DeleteTask from "../DeleteTaskComponent/DeleteTask";
import UpdateName from "../UpdateNameComponent/UpdateName";
import Search from "../SearchTaskComponent/Search";
import PhanTrang from "../PaginationComponent/PhanTrang";
import AddTask from "../AddTaskComponent/AddTask";

const DisplayTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(1);
  const [added, setAdded] = useState([]);
  const [status, setStatus] = useState();
  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const params = {
          pageNumber: pageNumber,
          pageSize: pageSize,
          key: search,
        };
        const response = await tasksApi.getAll(params);
        console.log("Fetch products successfully: ", response);
        setTasks(response.items);
        setTotalPage(response.totalItems);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchTaskList();
  }, [pageNumber, search, added, status]);
  const getClassByPriority = (prioritiesID) => {
    switch (prioritiesID) {
      case 1:
        return "text-green-500"; // Green color for priority 1
      case 2:
        return "text-orange-500"; // Orange color for priority 2
      case 3:
        return "text-red-500"; // Red color for priority 3
      default:
        return ""; // Default color if prioritiesID doesn't match any case
    }
  };
  const handleTaskUpdated = (isCompleted) => {
    setStatus(isCompleted);
  };

  const handleTaskDeleted = (deletedTaskID) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.tasksID !== deletedTaskID)
    );
  };
  const handleTaskAdded = (newTask) => {
    setAdded(() => [...tasks, newTask]);
  };
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  return (
    <div>
      <AddTask onTaskAdded={handleTaskAdded} ListTasks={tasks} />
      <div className="flex flex-col justify-center items-center py-5 w-[600px] rounded-md bg-gray-50 mx-auto">
        <ul>
          <Search search={search} setSearch={setSearch} />
          <div className="title flex gap-44 font-bold text-lg">
            <h1 className="ml-3 ">Task Name</h1>

            <h1>Due Date</h1>
          </div>

          {tasks.map((task, index) => (
            <li key={task.tasksID || index}>
              <strong className="border flex p-3 w-[579px] text-gray-500">
                <UpdateStatus
                  initialChecked={task.isCompleted}
                  tasksID={task.tasksID}
                  onTaskUpdated={handleTaskUpdated}
                />

                <div className={`${getClassByPriority(task.prioritiesID)}`}>
                  <UpdateName tasksID={task.tasksID} taskName={task.taskName} />
                </div>
                <div className="ml-auto">{task.dueDate}</div>
                <div className="ml-auto flex gap-5 items-center">
                  <DeleteTask
                    onDelete={handleTaskDeleted}
                    tasksID={task.tasksID}
                  />
                </div>
              </strong>
            </li>
          ))}
        </ul>
        <PhanTrang pageNumber={totalPage} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default DisplayTasks;
