import Card from '../../components/card/Card';

function Home({ logements }) {
    return (
        <div className="home">
            <section className="home__grid">
                {logements.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </section>
        </div>
    );
}

export default Home;