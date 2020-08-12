import React from 'react';
import './FeedPhotosItem.css';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className="photo">
      <img src={photo.src} alt={photo.title} />
      <span className="visualizacao">{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
