import { Link } from 'react-router-dom';

function Card({ logement }) {
    return (
        <article className="card">
            {/* Lien vers la page de détail du logement */}
            <Link to={`/logement/${logement.id}`}>
                <div className="card__image-container">
                    {/* Image du logement */}
                    <img src={logement.cover} alt={logement.title} className="card__image" />
                    {/* Superposition avec un gradient */}
                    <div className="card__radient"></div>
                </div>
                {/* Titre du logement */}
                <h2 className="card__title">{logement.title}</h2>
            </Link>
        </article>
    );
}

export default Card;
