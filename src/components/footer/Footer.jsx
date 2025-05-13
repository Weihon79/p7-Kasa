import FooterLogo from '../../assets/logo/logo_footer.png';

function Footer() {
    return (
        <footer className='footer'>
            <img src={FooterLogo} alt="FooterLogo" className="footer__logo" />
            <p>&copy; 2020 Kasa. All right reserved.</p>
        </footer>
    )
}


export default Footer;