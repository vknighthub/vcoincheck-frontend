
const Requirement = ({ htmlFor, isvalid, validMessage, invalidMessage }) => (
    <label htmlFor={htmlFor} className={!isvalid ? `invalid` : `valid`}>
        
        <span className={`mx-3 fa fa-check-circle ${isvalid ? "text-success" : ""}`} />
        <span className = {`${isvalid ? "text-success" : ""}`} >{!isvalid ? invalidMessage : validMessage}</span>
    </label>
);

export default Requirement;