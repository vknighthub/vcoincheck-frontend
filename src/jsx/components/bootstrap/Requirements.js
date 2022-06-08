import React from "react";
import Requirement from "../vKnightHub/Control/Requirement";

const Requirements = ({ valid,t }) => (
    <section className="strength-meter py-3">
        <h4>{t('pwdrequirement')}</h4>
        <Requirement
            htmlFor="password"
            isvalid={valid}
            invalidMessage={t('invalidpwdrequirement')}
            validMessage={t('validpwdrequirement')}
        />
    </section>
);

export default Requirements;