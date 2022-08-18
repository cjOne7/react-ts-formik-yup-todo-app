import React from 'react';
import {IFormInput} from "./contact_form_interfaces";
import {FormikProps} from "formik";
import {IContactFormValues} from "../contact_form_util";

interface IFormInputProps {
    readonly formInputFields: IFormInput
    // readonly formik: FormikProps<IContactFormValues>
    readonly formik: any
}

const FormInput: React.FC<IFormInputProps> = ({formInputFields, formik}) => {
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[formInputFields.name]}
                  placeholder={formInputFields.placeholder}
                  type={formInputFields.type}
    />;
};

export default FormInput;