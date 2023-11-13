import React, { useState } from "react";
import CreateTask from "./createTaskComponent/CreateTaskComponent";
import ShowList from "./showListComponent/ShowListComponent";

export default function InputComponent() {
  const tasks = [
    {
        id: 1,
        taskname: "Wake up",
        status: false,
      },
      {
        id: 2,
        taskname: "Be surprised",
        status: false,
      },
      {
        id: 3,
        taskname: "Doing something",
        status: false,
      },
      {
        id: 4,
        taskname: "Get drunk",
        status: true,
      },
      {
        id: 5,
        taskname: "Go back to sleep",
        status: false,
      },
  ];

  const [list, setList] = useState(tasks);
  const [textValue, setTextValue] = useState("");

  const changeStatus = (id) => {
    setList((prevList) => {
      const newList = prevList.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      );
      return newList;
    });
  };

  const addItem = () => {
    if (textValue !== "") {
      const newItem = {
        id: list.length + 1,
        taskname: textValue,
        status: false,
      };
      setList((prevList) => [...prevList, newItem]);
      setTextValue("");
    }
  };

  const deleteItem = (id) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };

  return (
    <div>
      <CreateTask addItem={addItem} setTextValue={setTextValue} />
      <ShowList list={list} changeStatus={changeStatus} deleteItem={deleteItem} />
    </div>
  );
}