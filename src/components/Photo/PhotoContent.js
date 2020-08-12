import React from 'react';
import './PhotoContent.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  console.log(data);
  return (
    <div className="photoContent">
      <div className="img">
        <img src={photo.src} alt={photo.title} />
        <div className="details">
          <div>
            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span className="visualizacoes">{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className="attributes">
              <li>{photo.peso} kg</li>
              <li>{photo.idade} anos</li>
            </ul>
          </div>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
