function Home({ logements }) {
    return (
        <div>
            <ul>
                {logements.map((logement) => (
                    <li key={logement.id}>{logement.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;