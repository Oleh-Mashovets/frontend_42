import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPaperPlane, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import './showListComponent.scss';

export default function ShowList({ list, changeStatus, deleteItem }) {
  return (
    <div className="list__todo">
      {list.map(({ id, taskname, status }) => (
        <div className="wrapper__item" key={id}>
          <div className="item__check">
              <input
                type="radio"
                name={`task-radio-${id}`}
                checked={status}
                onChange={() => changeStatus(id)}
                disabled={status}
              />
            </div>
            <div
              className={`item__task ${status ? 'selected' : ''}`}
              onClick={() => changeStatus(id)}
            >
              <span className="item__taskname">{taskname}</span>
              <span className={`item__status ${status ? 'selected' : ''}`}>
                {status ? 'In progress' : 'Inactive'}
              </span>
            </div>
            <div className="item__buttons">
              <button
                type="button"
                onClick={() => deleteItem(id)}
                className="item__btn delete"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <button className="item__btn transfer">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <button className="item__btn complete">
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>
        </div>
      ))}
    </div>
  );
}