import React from 'react';
import {IFormInput} from "./contact_form_interfaces";

interface IFormInputProps {
    readonly formInputFields: IFormInput
}

const FormInput: React.FC<IFormInputProps> = ({formInputFields}) =>
    <input id={formInputFields.id}
           name={formInputFields.name}
           className={formInputFields.className}
           onChange={formInputFields.onChange}
           value={formInputFields.value}
           placeholder={formInputFields.placeholder}
           type={formInputFields.type}
    />;

export default FormInput;