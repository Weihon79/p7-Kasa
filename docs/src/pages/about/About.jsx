import aboutBanner from '../../assets/banner/aboutBanner.png';
import Collapse from '../../components/collapse/Collapse';
import CollapseData from '../../data/collapses.json';

function About() {
    return (
      <div className='section'>
        {/* Affichage de la bannière en haut de la page */}
        <div className="banner-container">
          <img src={aboutBanner} alt='banner' className='banner-container__image' />
        </div> 

        {/* Affichage des sections repliables */}
        <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
        </div>
      </div> 
    );
}
  
export default About;
