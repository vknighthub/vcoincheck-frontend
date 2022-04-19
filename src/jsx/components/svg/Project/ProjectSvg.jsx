
const ProjectSvg = (props) => {
    return (
        props.image && <img className="img-fluid" width={props.width} height={props.height} src={require(`../../../../icons/project/svgs/${props.image}.svg`).default} alt="" />
    )
}
export default ProjectSvg