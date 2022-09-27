/* eslint-disable react-hooks/exhaustive-deps */
import { Field, Formik } from "formik";
import { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { getUserRolesAction } from '../../../../store/actions/UserAction';
import { setUserRoleAction } from './../../../../store/actions/UserAction';

const UserRolePermit = (props) => {
    const { userroles, rolelist, username } = props
    const dispatch = useDispatch();

    const getListRole = (list) => {
        const listRole = [];
        list.forEach((key) => {
            const jobject = { "key": key.rolename, "value": key.roleid + "" }
            listRole.push(jobject)
        })
        return listRole
    }

    const getListRoleFromUser = (list) => {
        const listRole = [];
        list.forEach((key) => {
            listRole.push(key.roleid + "")
        })
        return listRole
    }

    const optionRole = getListRole(userroles)


    const onSubmit = (values) => {
        const postData =
        {
            username: username,
            roleid: values,
            description: "Set role for user" + username
        }
        dispatch(setUserRoleAction(postData))
        props.setApply(true)
    }

    useEffect(() => {
        props.fetchUserRole();
    }, [])

    return (
        <>
            <Formik
                initialValues={{ userrole: getListRoleFromUser(rolelist) }}
                onSubmit={({ userrole }) => onSubmit(userrole)}
            >
                {({ handleChange, submitForm }) => (
                    <>
                        {optionRole.map((role, index) => (
                            <div className='form-check form-check-inline' key={index}>
                                <label className='form-check-label'>
                                    <Field
                                        type="checkbox"
                                        name="userrole"
                                        value={role.value}
                                        className="form-check-input"
                                        onChange={(e) => {
                                            handleChange(e);
                                            submitForm();
                                        }}
                                    />
                                    <label htmlFor={role.value}>{role.key}</label>
                                </label>
                            </div>

                        ))}
                    </>
                )}



            </Formik>


        </>
    );
};

const mapStateToProps = state => {
    return {
        userroles: state.userroles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserRole: () => {
            dispatch(getUserRolesAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRolePermit);
