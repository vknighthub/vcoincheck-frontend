import { Link } from 'react-router-dom';
import login from "../../../images/bg-login2.png";
import logo from '../../../images/Logo450x450.svg';
const Asideleft = () => {
    return (
        <div className="login-aside-left" style={{ backgroundImage: "url(" + login + ")" }}>
            <Link to={"#"} className="login-logo">
                <img src={logo} alt="" className="mr-2 img-fluid" />
            </Link>
            <div className="login-description">
                <div className="mt-5">
                    <Link to={"#"} className="text-black mr-4">Privacy Policy</Link>
                    <Link to={"#"} className="text-black mr-4">Contact</Link>
                    <Link to={"https://www.vknight.io/"} className="text-black">© 2021 vKnightHub</Link>
                </div>
            </div>
        </div>
    );
}

export default Asideleft;
