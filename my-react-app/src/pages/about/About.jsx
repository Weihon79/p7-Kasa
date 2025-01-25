import aboutBanner from '../../assets/banner/aboutBanner.png'

function About() {
    return (
      <div className="banner-container">
        <img src={aboutBanner} alt='banner' className='banner-container__image' />
      </div>
    );
  }
  
  export default About;