import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { languages } from './../../../../config/localization/language';
import { JP, UK, VN } from "./../../svg";

const Language = () => {
    const i18nextLng = localStorage.getItem('i18nextLng')
    const currentLanguageCode = i18nextLng || 'en'
    const [country, setCountry] = useState(i18nextLng)
    const { i18n } = useTranslation();

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        switch (lng) {
            case "en":
                setCountry('en')
                break;
            case "vn":
                setCountry('vn')
                break;
            case "jp":
                setCountry('jp')
                break;
            default:
                setCountry('en')
        }
    }

    const getIcon = (code, display) => {
        switch (code) {
            case 'en':
                return <UK width={26} height={26} display={display} />
            case 'vn':
                return <VN width={26} height={26} display={display} />
            case 'jp':
                return <JP width={26} height={26} display={display} />
            default:
                break;
        }
    }

    return (

        <Dropdown className="nav-item dropdown notification_dropdown ml-sm-3">
            <Dropdown.Toggle
                variant=""
                className="nav-link ai-icon i-false"
            >
                {languages.map(({ country_code }, index) => (
                    <Link to="#" key={index}>
                        {getIcon(country_code, country_code === country ? "true" : "none")}
                    </Link>
                ))}

            </Dropdown.Toggle>
            <Dropdown.Menu className="">
                <PerfectScrollbar className="widget-media ps">
                    {languages.map(({ code, name, country_code }) => (
                        <Dropdown.Item
                            className="dropdown-item"
                            disabled={currentLanguageCode === country_code || country_code === country} key={country_code}
                            onClick={() => handleChangeLanguage(code)}
                        >
                            {getIcon(country_code)}
                            <span className="ml-2">{name}</span>
                        </Dropdown.Item>
                    ))}
                </PerfectScrollbar>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Language;
