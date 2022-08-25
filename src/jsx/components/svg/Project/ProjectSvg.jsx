
const ProjectSvg = ({image,width,height,...rest}) => {
    return (
        image && <img className="img-fluid" width={width} height={height} src={image} {...rest} alt=""/>
    )
}
export default ProjectSvg