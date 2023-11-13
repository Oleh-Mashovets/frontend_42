import React from "react";
import './createTaskComponent.scss';

export default function CreateTask({ addItem, setTextValue }) {
  return (
    <div className="header">
      <div className="header__todo">
        <input
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          className="input__todo"
          type="text"
          placeholder="Enter your task"
        />
        <button className="button__todo" onClick={addItem}>
          New task
        </button>
      </div>
    </div>
  );
}