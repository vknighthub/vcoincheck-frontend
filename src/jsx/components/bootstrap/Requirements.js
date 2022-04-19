import React from "react";
import Requirement from "../vKnightHub/Control/Requirement";

const Requirements = ({ valid }) => (
    <section className="strength-meter py-3">
        <h4>Password Requirements</h4>
        <Requirement
            htmlFor="password"
            isvalid={valid}
            invalidMessage="We like long passwords, at least 8 characters if you could"
            validMessage="Sweet, that's long enough for us!"
        />
    </section>
);

export default Requirements;