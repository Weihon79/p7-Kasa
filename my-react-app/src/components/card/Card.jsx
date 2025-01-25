function Card({ logement }) {
    return (
        <article className="card">
            <img src={logement.cover} alt={logement.title} className="card__image" />
            <h2 className="card__title">{logement.title}</h2>
        </article>
    );
}

export default Card;