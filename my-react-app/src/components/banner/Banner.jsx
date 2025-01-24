import homeBanner from '../../assets/banner/homeBanner.png';

function Banner() {
    return (
        <div className='banner'>
            <img src={homeBanner} alt='banner' />
            <div className='banner__sombre'>
                <h2 className='banner__txt'>Chez vous, partout et ailleurs</h2>
            </div>
        </div>
    )
}

export default Banner;