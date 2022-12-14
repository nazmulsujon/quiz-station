import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo, total, id } = topic;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };
  // console.log(topic);
  return (
    <div className="col">
      <div className="card border-0 shadow-lg w-75 mx-auto bg-dark text-light">
        <img src={logo} className="card-img-top img-fluid" alt="topicLogo" />
        <div className="card-body">
          <div className="d-md-flex justify-content-between align-items-center p-2">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-text ">
              Quiz: <span className="text-danger">{total}</span>
            </h6>
            <button onClick={handleNavigate} className="btn btn-primary">
              Let's practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
