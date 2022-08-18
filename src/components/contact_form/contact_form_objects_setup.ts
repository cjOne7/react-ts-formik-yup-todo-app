import {IFormInput, IFormLabel} from "./contact_form_interfaces";

export function formInputAttrSetup() {
    const firstNameFormInput: IFormInput = {
        id: "firstName",
        name: "firstName",
        className: "form__field",
        placeholder: "First name",
    }

    const secondNameFormInput: IFormInput = {
        id: "secondName",
        name: "secondName",
        className: "form__field",
        placeholder: "Second name",
    }

    const emailFormInput: IFormInput = {
        id: "email",
        name: "email",
        className: "form__field",
        placeholder: "email",
        type: "email"
    }
    return {firstNameFormInput, secondNameFormInput, emailFormInput}
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