
import { useDispatch } from 'react-redux';
import { changeAvatarUserAction } from '../../../store/actions/UserAction';

const FileDialogue = (props) => {
    const dispatch = useDispatch();

    const reloadProfile = () => {
        const preview = document.getElementById('profile');
        const file = document.querySelector('input[name=browse]').files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            preview.src = reader.result;
            let postdata = {
                username: props.username,
                avatar: preview.src
            }
            dispatch(changeAvatarUserAction(postdata));
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <div className="image-upload">
                <img id="profile" className="img-fluid rounded-circle" alt="profile" src={props.image} />
                <input id="browse" name="browse" type="file" accept="image/*" capture="camera" onChange={() => reloadProfile()} multiple />
            </div>

        </>
    )


}
export default FileDialogue