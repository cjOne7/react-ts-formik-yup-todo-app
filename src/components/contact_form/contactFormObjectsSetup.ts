import {IFormInput, IFormLabel} from "./contact_from_ui/contact_form_interfaces";
import {useContactFormUtil} from "./contact_form_util";

export function useFormInputAttrSetup() {
    const formik = useContactFormUtil();

    const firstNameFormInput: IFormInput = {
        id: 'firstName',
        name: "firstName",
        className: "form__field",
        placeholder: "First name",
        onChange: formik.handleChange,
        value: formik.values.firstName
    }

    const secondNameFormInput: IFormInput = {
        id: 'secondName',
        name: "secondName",
        className: "form__field",
        placeholder: "Second name",
        onChange: formik.handleChange,
        value: formik.values.secondName
    }

    const emailFormInput: IFormInput = {
        id: 'email',
        name: "email",
        className: "form__field",
        placeholder: "email",
        onChange: formik.handleChange,
        value: formik.values.email,
        type: 'email'
    }
    return {formik, firstNameFormInput, secondNameFormInput, emailFormInput}
}

export function formLabelAttrSetup() {
    const firstNameLabel: IFormLabel = {
        label: 'First name',
        className: 'form__label',
        htmlFor: 'firstName',
    }

    const secondNameLabel: IFormLabel = {
        label: 'Second name',
        className: 'form__label',
        htmlFor: 'secondName',
    }

    const emailLabel: IFormLabel = {
        label: 'Email',
        className: 'form__label',
        htmlFor: 'email',
    }
    return {firstNameLabel, secondNameLabel, emailLabel}
}