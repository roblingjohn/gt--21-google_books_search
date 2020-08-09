import React from 'react';
import SavedBook from '../../components/SavedBook/SavedBook'

const Saved = () => {
    return (
        <div className="container">
            <h2>Saved Books</h2>
            <SavedBook
        title="Book Title"
        author="Book Author"
        image="https://www.placecage.com/140/100"
        description="Book description goes here."
      />
        </div>
    );
};

export default Saved;