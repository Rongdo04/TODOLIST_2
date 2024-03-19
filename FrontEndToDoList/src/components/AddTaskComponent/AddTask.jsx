import React, { useState } from "react";
import tasksApi from "../../api/tasksApi";

const AddTask = ({ ListTasks, onTaskAdded }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [listTasks, setListTasks] = useState(ListTasks);
  const [priority, setPriority] = useState(1);
  const priorityIDMap = {
    High: 1,
    Medium: 2,
    Low: 3,
  };
  const handleRadioPriority = (e) => {
    setPriority(e.target.value);
    console.log(e.target.value);
  };
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleAddTask = async () => {
    try {
      const params = {
        taskName: taskName,
        Description: description,
        DueDate: dueDate,
        PrioritiesID: priorityIDMap[priority],
        IsCompleted: false,
      };
      const response = await tasksApi.add(params);
      console.log("Task added successfully:", response.data);
      setTaskName("");
      setDescription("");
      onTaskAdded(response.data);
      // Nếu muốn làm điều gì đó khi công việc được thêm thành công, bạn có thể thêm mã ở đây.
    } catch (error) {
      alert("Error adding task", error);
      setTaskName("");
      setDescription("");
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-5">
      <div className="flex justify-center items-center w-screen p-5">
        <div className="flex justify-center items-center gap-5 bg-white p-5 px-20 rounded-md">
          <div className="flex flex-col gap-5 ">
            <div className="flex items-center gap-5">
              {" "}
              {/* Container cho Task Name */}
              <input
                className="border p-1 px-20"
                type="text"
                value={taskName}
                onChange={handleTaskNameChange}
                placeholder="Task Name"
              />
            </div>
            <div className="flex items-center gap-5">
              {" "}
              {/* Container cho Description */}
              <input
                className="border p-1 px-20"
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
              />
            </div>
            <div className="flex items-center gap-5">
              {" "}
              {/* Container cho Description */}
              <input
                className="border p-1 px-20"
                type="datetime-local"
                value={dueDate}
                onChange={handleDueDateChange}
                placeholder="Due date"
              />
            </div>
            <div className="Radio-input flex gap-4">
              <input
                type="radio"
                id="priorityHigh"
                name="priority"
                value="High"
                checked={priority === "High"} // Set checked based on state
                onChange={handleRadioPriority}
              />
              <label htmlFor="priorityHigh">High</label>
              <input
                type="radio"
                id="priorityMedium"
                name="priority"
                value="Medium"
                checked={priority === "Medium"} // Set checked based on state
                onChange={handleRadioPriority}
              />
              <label htmlFor="priorityMedium">Medium</label>
              <input
                type="radio"
                id="priorityLow"
                name="priority"
                value="Low"
                checked={priority === "Low"} // Set checked based on state
                onChange={handleRadioPriority}
              />
              <label htmlFor="priorityLow">Low</label>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <button
              className=" bg-red-200 p-1 text-white"
              onClick={handleAddTask}
            >
              Add{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
