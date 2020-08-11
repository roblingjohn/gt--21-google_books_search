import React from "react";
import API from "../../utils/API";

const SavedBook = (props) => {
  const handleView = (event) => {
    event.preventDefault();
    window.location.assign(props.link);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    const deleteConfirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (deleteConfirm) {
      API.deleteBook(props.id);
      window.location.assign("/saved");
    }
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
          <button className="delete" id={props.id} onClick={handleDelete}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedBook;
