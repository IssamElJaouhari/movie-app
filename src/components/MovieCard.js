import React from 'react';
import { FaStar } from 'react-icons/fa';

function MovieCard(props) {
  const { title, description, posterURL, rating } = props;

  const starRating = Math.round(rating / 1);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < starRating ? 'star filled' : 'star'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="MovieCard">
      <img src={posterURL} alt={title} className="MovieCard__poster" />
      <div className="MovieCard__content">
        <h2 className="MovieCard__title">{title}</h2>
        <div className="MovieCard__rating">
          <span>{rating}</span>
          <div className="MovieCard__stars">{renderStars()}</div>
        </div>
        <p className="MovieCard__description">{description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
