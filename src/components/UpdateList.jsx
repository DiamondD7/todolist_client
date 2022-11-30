import React, { useState } from "react";
import { API_URI } from "../API_Auth";

const UpdateList = (props) => {
  const [uTitle, setUTitle] = useState(props.updateData.Title);
  const [uDetails, setUDetails] = useState(props.updateData.Details);
  const [title, setTitle] = useState(uTitle);
  const [details, setDetails] = useState(uDetails);

  const closeModal = () => {
    props.isOpen(false);
  };

  const update = (e) => {
    e.preventDefault();
    fetch(API_URI + props.updateData.TableId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        TableId: props.updateData.TableId,
        Title: title,
        Details: details,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div>
      <div className="Modal">
        <form className="add-form" onSubmit={update}>
          <label className="add-label">Title</label>
          <input
            className="add-input"
            r
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="textarea-div">
            <textarea
              className="add-textarea"
              placeholder="Details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
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
