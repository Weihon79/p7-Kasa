import { Link } from 'react-router-dom';

function Card({ logement }) {
    return (
        <article className="card">
            <Link to={`/logement/${logement.id}`}>
                <img src={logement.cover} alt={logement.title} className="card__image" />
                <h2 className="card__title">{logement.title}</h2>
            </Link>
        </article>
    );
}

export default Card;