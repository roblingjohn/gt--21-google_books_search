import React from "react";
import API from "../../utils/API";

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
        alert("Book saved!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container bookResult">
      <div className="row">
        <div className="col s12">
          <h3>{props.title}</h3>
          <h4>{props.author}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="col s9">
          <p>{props.description}</p>
          <button className="view" id={props.id} onClick={handleView}>
            View
          </button>
          <button className="save" id={props.id} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
