import * as Yup from 'yup';

const ValidateRadioButton = (listRadioButton) => {
    const shape = {};
    listRadioButton.forEach((question) => {
        shape[question.id] = Yup.string().required("Please choice a answer for this question ")
    })
    return Yup.object().shape(shape);
}

export default ValidateRadioButton;
