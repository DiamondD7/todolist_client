import React, { useState } from "react";
import { API_URI } from "../API_Auth";

const UpdateList = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const closeModal = () => {
    props.isOpen(false);
  };

  const update = (e) => {
    e.preventDefault();
    fetch(API_URI + props.updateData.TableId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: title,
        Details: details,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated: ", data);
      });
  };

  return (
    <div>
      <div className="Modal">
        <form className="add-form" onSubmit={update}>
          <label className="add-label">Title</label>
          <input
            className="add-input"
            type="text"
            value={props.updateT}
            onChange={(e) => props.setupdateTitle(e.target.value)}
          />
          <div className="textarea-div">
            <textarea
              className="add-textarea"
              placeholder="Details..."
              value={props.updateD}
              onChange={(e) => props.setupdateDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="btns-add-div">
            <button className="add-add-btn">Update</button>
            <button className="add-cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;
