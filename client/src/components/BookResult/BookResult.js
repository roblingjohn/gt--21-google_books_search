import React from "react";
import API from "../../utils/API";
import Link from "react-router-dom";
import axios from "axios";

const BookResult = (props) => {
  const handleView = (event) => {
    event.preventDefault();
    window.location.assign(props.link);
  };

  const handleSave = (event) => {
    event.preventDefault();
    API.saveBook({
      title: props.title,
      author: props.author,
      description: props.description,
      image: props.image,
      link: props.link,
    })
      .then(() => {
        console.log("Book saved!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
      <button className="view" id={props.id} onClick={handleView}>
        View
      </button>
      <button className="save" id={props.id} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default BookResult;
