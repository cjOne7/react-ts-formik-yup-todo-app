import React from 'react';
import {IFormInput} from "./contact_form_interfaces";

interface IFormInputProps {
    readonly formInputFields: IFormInput
    // readonly formik?: any
}

const FormInput: React.FC<IFormInputProps> = ({formInputFields}) => {
    // const formInputSettings: IFormInput = {
    //     id: 'email',
    //     name: "email",
    //     className: "form__field",
    //     placeholder: "email",
    //     onChange: formik.handleChange,
    //     value: formik.values.email,
    //     type: 'email'
    // }
    return <input id={formInputFields.id}
                  name={formInputFields.name}
                  className={formInputFields.className}
                  onChange={formInputFields.onChange}
                  value={formInputFields.value}
                  placeholder={formInputFields.placeholder}
                  type={formInputFields.type}
    />;
};

export default FormInput;