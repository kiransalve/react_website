import React from "react";
import web from "./images/image1.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card h-100">
          <img src={props.imgsrc} alt="img" className="h-50" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus aut eveniet magnam?
            </p>
            <a href="" className="btn btn-outline-info">
              Lets Go
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
