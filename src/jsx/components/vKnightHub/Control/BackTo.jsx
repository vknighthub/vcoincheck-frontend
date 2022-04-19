
import { Link } from 'react-router-dom';

const BackTo = (props) => {
    const { className, name, to, ...rest } = props;
    return (
        <Link className={className} to={props.to} {...rest}>{name}</Link>
    );
};


export default BackTo;
