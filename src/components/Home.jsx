import React, { useState, useEffect } from "react";
import { API_URI } from "../API_Auth";
import { CaretRight, Trash, PencilLine, Plus } from "phosphor-react";
import AddList from "./AddList";

const Home = () => {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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

  const addClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
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
              <div className="data-container">
                <div className="sub-container" key={index}>
                  <h1>{items.Title}</h1>
                </div>
                <div className="btns-actions">
                  <button className="btn-open">
                    <CaretRight size={32} color={"white"} />
                  </button>
                  <button className="btn-edit">
                    <PencilLine size={32} color={"white"} />
                  </button>
                  <button className="btn-delete">
                    <Trash size={32} color={"red"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="header-introduction">What are the plans for today?</h2>
      </div>
      {openModal === true ? (
        <div>
          <div className="overlay"></div>
          <AddList isOpen={setOpenModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
