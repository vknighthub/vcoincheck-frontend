import { Link, useHistory } from "react-router-dom";
import { ProjectSvg } from "../../../components/svg";

const HotProject = ({ project, index }) => {
    const history = useHistory();

    const handleRowClick = (row) => {
        history.push(`/ecom-project-detail/${row}`);
    }


    return (
        <tr style={{cursor: `pointer`}} onClick={() => handleRowClick(project.proname)}>
            <td>
                <span className="bgl-success p-3 d-inline-block">
                    {index + 1}
                </span>
            </td>
            <td>
                <div className="font-w600 wspace-no">
                    <span className="mr-1">
                        {<ProjectSvg image={project.proicon} width={24} height={24} />}
                    </span>
                    {project.proname}
                </div>
            </td>
            <td className="font-w500">{project.Ecosystem}</td>
            <td className="font-w600 text-center">{project.protype}</td>
            <td>
                <Link
                    className="btn-link text-success float-center"
                    to="/"
                >
                    {project.prosts}
                </Link>
            </td>
            <td>{project.totalreview}</td>
            <td>20/03/2022 06:00 AM</td>
        </tr>
    );
};

export default HotProject;
