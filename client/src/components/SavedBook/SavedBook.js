import React from "react";
import API from '../../utils/API'

const SavedBook = (props) => {
  const handleView = (event) => {
    event.preventDefault();
    window.location.assign(props.link);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    API.deleteBook(props.id)
  }
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
      <button className="view" onClick={handleView}>View</button>
      <button className="save" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SavedBook;
