import aboutBanner from '../../assets/banner/aboutBanner.png';
import Collapse from '../../components/collapse/Collapse';

function About() {
    return (
      <div className='section'>
        <div className="banner-container">
          <img src={aboutBanner} alt='banner' className='banner-container__image' />
        </div>

        <div>
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforme aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>
      </Collapse>
      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
      </Collapse>
      <Collapse title="Service">
        <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nous locataires, soit empreinte de respect et de bienveillance.</p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atelier sur la sécurité domestique pour nos hôtes.</p>
      </Collapse>
    </div>
      </div>  
    );
  }
  
  export default About;