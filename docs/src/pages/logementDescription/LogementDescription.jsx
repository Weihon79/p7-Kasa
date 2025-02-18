import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RatingStars from '../../components/RatingStars/RatingStars';
import Collapse from '../../components/collapse/Collapse';

function LogementDescription({ logements }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(l => l.id === id);

  // Vérifier si le logement existe
  if (!logement) {
    navigate('/error', { replace: true });
    return null;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pictures = logement.pictures;

  // Fonction pour changer l'image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <>
      <div className="logement-description">
          <div className="carousel">
              <button className="carousel__button prev" onClick={prevImage}>
                  <i className="fa-solid fa-chevron-left"></i>
              </button>
              <img
              src={pictures[currentImageIndex]}
              alt={`Logement ${logement.title}`}
              className="carousel__image"
              />
              <button className="carousel__button next" onClick={nextImage}>
                  <i className="fa-solid fa-chevron-right"></i>
              </button>

              <div className="carousel__counter">
                {currentImageIndex + 1}/{pictures.length}
              </div>
          </div>
          
          <div className='logement-description__title'>
              <h2 className='logement-description__title2'>{logement.title}</h2>
              <h3>{logement.location}</h3>

              <div className='logement-description__tag-rate-container'>
                  <ul className="logement-description__tags">
                      {logement.tags.map((tag, index) => (
                          <li key={index} className="tag">
                              {tag}
                          </li>
                      ))}
                  </ul>
                  <RatingStars rating={logement.rating} />
              </div>    
          </div>

          <div className='logement-description__host'>
              <div className='logement-description__host__info'>
                <div className='logement-description__host__name'>
                  <p>{logement.host.name}</p>
                </div>
                <img
                  src={logement.host.picture}
                  alt={`Hôte ${logement.host.name}`}
                  className="logement-description__host__picture"
                />
              </div>
          </div>     
      </div>

      <div className="logement-description__collapses">
      <Collapse title="Description" content={logement.description} />
      <Collapse
        title="Équipements" 
        content={
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }
      />
      </div>
    </>
  );
}

export default LogementDescription;
