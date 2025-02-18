import { Link } from 'react-router-dom';

function Card({ logement }) {
    return (
        <article className="card">
            <Link to={`/logement/${logement.id}`}>
            <div className="card__image-container">
                <img src={logement.cover} alt={logement.title} className="card__image" />
                <div className="card__radient"></div>
            </div>
                <h2 className="card__title">{logement.title}</h2>
            </Link>
        </article>
    );
}

export default Card;