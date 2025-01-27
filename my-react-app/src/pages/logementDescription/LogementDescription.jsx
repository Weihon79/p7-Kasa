import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RatingStars from '../../components/RatingStars/RatingStars';

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

            <ul className="carousel__dots">
                {pictures.map((_, index) => (
                    <li
                        key={index}
                        className={`carousel__dot ${index === currentImageIndex ? "active" : ""}`}
                    ></li>
                ))}
            </ul>
        </div>
        
        <div className='logement-description__title'>
            <h2>{logement.title}</h2>
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
    </div>
  );
}

export default LogementDescription;
