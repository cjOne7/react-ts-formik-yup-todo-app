import React from 'react';
import './contact_form_styles.css'
import Input from "./contact_from_ui/Input";
import Label from "./contact_from_ui/Label";
import {formInputAttrSetup, formLabelAttrSetup} from './contactFormObjectsSetup'
import {useContactFormUtil} from "./contact_form_util";

const ContactForm: React.FC = () => {
    // const [contactFormInfo, setContactFormInfo] = useState<IContactFormInfo>();
    const {firstNameFormInput, secondNameFormInput, emailFormInput} = formInputAttrSetup()
    const {firstNameLabel, secondNameLabel, emailLabel} = formLabelAttrSetup()
    const formik = useContactFormUtil();

    return (
        <div className={'container'}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__group field">
                    <Input formInputFields={firstNameFormInput} formik={formik}/>
                    <Label formLabelFields={firstNameLabel}/>
                    {formik.touched.firstName && formik.errors.firstName ?
                        <div className={'form_error'}>{formik.errors.firstName}</div> : null}
                </div>
                <div className="form__group field">
                    <Input formInputFields={secondNameFormInput} formik={formik}/>
                    <Label formLabelFields={secondNameLabel}/>
                    {formik.touched.secondName && formik.errors.secondName ?
                        <div className={'form_error'}>{formik.errors.secondName}</div> : null}
                </div>
                <div className="form__group field">
                    <Input formInputFields={emailFormInput} formik={formik}/>
                    <Label formLabelFields={emailLabel}/>
                    {formik.touched.email && formik.errors.email ?
                        <div className={'form_error'}>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <input type="submit" value={'Submit'}/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;