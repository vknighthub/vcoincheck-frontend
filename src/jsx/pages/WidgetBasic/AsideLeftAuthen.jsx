import { Link } from 'react-router-dom';
import login from "../../../images/bg-login2.png";

const AsideLeftAuthen = (props) => {
    return (
        <div className="login-aside-left" style={{ backgroundImage: "url(" + login + ")" }}>
            <Link to={"#"} className="login-logo">
                <img src={'https://api.vcoincheck.io/user/image/scan.gif'} alt="" className="mr-2 img-fluid" />
            </Link>
            <div className="login-description">
                <div className="mt-5">
                    <Link to={"#"} className="text-secondary mr-4">{props.t('privacy')}</Link>
                    <Link to={"#"} className="text-secondary mr-4">{props.t('contact')}</Link>
                    <Link to={"https://www.vknight.io/"} className="text-secondary">© 2021 vKnightHub</Link>
                </div>
            </div>
        </div>
    );
}

export default AsideLeftAuthen;
