import Card from '../../components/card/Card';
import Banner from '../../components/banner/Banner';

function Home({ logements }) {
    return (
        <div className="home">
            {/* Bannière affichée en haut de la page */}
            <Banner />

            {/* Section contenant la grille de cartes de logements */}
            <section className="home__grid">
                {logements.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </section>
        </div>
    );
}

export default Home;
