import React, { useState } from 'react';

function Filter(props) {
  const { onFilter } = props;
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={titleFilter} onChange={handleTitleChange} />
        </label>
        <label>
          Rating:
          <input type="number" min="0" max="10" step="0.1" value={ratingFilter} onChange={handleRatingChange} />
        </label>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default Filter;
