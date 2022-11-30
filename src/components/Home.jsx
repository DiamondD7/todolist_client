import React, { useState, useEffect } from "react";
import { API_URI } from "../API_Auth";
import { CaretRight, Trash, PencilLine, Plus } from "phosphor-react";
import AddList from "./AddList";
import UpdateList from "./UpdateList";
import whattodo from "../whattodo-icon.png";

const Home = () => {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateList, setUpdateList] = useState([]);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDetails, setUpdateDetails] = useState("");

  useEffect(() => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data);
      });
  }, []);

  const Modalfunc = (modalOpen) => {
    setOpenModal(modalOpen);
  };

  const updateClick = (i) => {
    setOpenUpdateModal(true);
    setUpdateList(i);
    setUpdateTitle(i.Title);
    setUpdateDetails(i.Details);
    console.log(i);
  };

  const addClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const deleteClick = (i) => {
    fetch(API_URI + i.TableId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    window.location.reload();
  };
  return (
    <div>
      <div className="main-container">
        <div className="card">
          <div className="card-container">
            <button className="btn-add" onClick={addClick}>
              <Plus size={32} color={"#202020"} />
            </button>
            {list.map((items, index) => (
              <div className="data-container" key={items.TableId}>
                <div className="sub-container">
                  <h1>{items.Title}</h1>
                </div>
                <div className="btns-actions">
                  <button className="btn-open">
                    <CaretRight size={32} color={"white"} />
                  </button>
                  <button
                    className="btn-edit"
                    onClick={() => updateClick(items)}
                  >
                    <PencilLine size={32} color={"white"} />
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => deleteClick(items)}
                  >
                    <Trash size={32} color={"red"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img className="whattodo-logo" src={whattodo} />
        </div>
      </div>
      {openModal === true ? (
        <div>
          <div className="overlay"></div>
          <AddList isOpen={setOpenModal} />
        </div>
      ) : (
        ""
      )}
      {openUpdateModal === true ? (
        <div>
          <div className="overlay"></div>
          <UpdateList isOpen={setOpenUpdateModal} updateData={updateList} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
