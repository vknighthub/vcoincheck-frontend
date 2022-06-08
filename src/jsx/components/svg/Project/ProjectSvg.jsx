
const ProjectSvg = (props) => {
    return (
        props.image && <img className="img-fluid" width={props.width} height={props.height} src={props.image} alt="" />
    )
}
export default ProjectSvg