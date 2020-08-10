import React from "react";
import API from "../../utils/API";

const BookResult = (props) => {
  const handleView = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const handleSave = (event) => {
    event.preventDefault();
    API.saveBook({ 
      id: props.id,
      title: props.title,
      author: props.author,
      description: props.description,
      image: props.image,
      link: props.link
     }).then(console.log(props));
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
