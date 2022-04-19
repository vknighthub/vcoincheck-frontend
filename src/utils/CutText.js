const CutText = ({content,start,end}) => {
    var text = content.substring(start, end)
    return text + '...';
}
export default CutText;