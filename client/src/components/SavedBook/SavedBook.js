import React from "react";

const SavedBook = (props) => {
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
      <button className="view">View</button>
      <button className="save">Delete</button>
    </div>
  );
};

export default SavedBook;
