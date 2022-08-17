import React from 'react';
import {IFormLabel} from "./contact_form_interfaces";

interface IFormLabelProps {
    readonly formLabelFields: IFormLabel
}

const FormLabel: React.FC<IFormLabelProps> = ({formLabelFields}) =>
    <label htmlFor={formLabelFields.htmlFor}
           className={formLabelFields.className}>
        {formLabelFields.label}
    </label>;

export default FormLabel;