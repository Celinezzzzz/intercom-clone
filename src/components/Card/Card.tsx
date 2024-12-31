import React from 'react';
import './Card.scss';

type CardProps = {
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
};

const Card: React.FC<CardProps> = ({ title, description, imgSrc, alt }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__header">
            <div className="card__title">{title}</div>
            <a className="card__link card__link--upper" href="#">Learn more</a>
        </div>
        <p className="card__description">{description}</p>
        <a className="card__link card__link--lower" href="#">Learn more</a>
      </div>
      <img className="card__image" src={imgSrc} alt={alt} />
    </div>
  );
};

export default Card;
