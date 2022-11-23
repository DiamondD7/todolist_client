import React, { useState } from "react";
import { API_URI } from "../API_Auth";
import "../styles/addliststyle.css";

const AddList = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const closeModal = () => {
    props.isOpen(false);
  };

  const addData = (e) => {
    e.preventDefault();
    fetch(API_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Title: title,
        Details: details,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated: ", data);
        window.location.reload();
      });
  };
  return (
    <div>
      <div className="Modal">
        <form className="add-form" onSubmit={addData}>
          <label className="add-label">Title</label>
          <input
            className="add-input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="textarea-div">
            <textarea
              className="add-textarea"
              placeholder="Details..."
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="btns-add-div">
            <button className="add-add-btn">Add</button>
            <button className="add-cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddList;
