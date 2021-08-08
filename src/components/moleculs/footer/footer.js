import './footer.css'
import logo from '../../../assets/img/logo_footer.png'

const Footer = () => {
    return (
        <div className="footer">
            <span className="logo-footer-wrapper">
                <img className="logo-footer" src={logo} alt="logo" />
            </span>
            <div className="footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iste incidunt hic neque debitis et expedita iure est obcaecati doloribus possimus animi consequuntur deserunt maiores delectus quidem optio, consectetur sunt!
            </div>
        </div>
    );
}

export default Footer;