import React from 'react';
import './contact_form_styles.css'
import FormInput from "./contact_from_ui/FormInput";
import FormLabel from "./contact_from_ui/FormLabel";
import {formInputAttrSetup, formLabelAttrSetup} from './contactFormObjectsSetup'
import {useContactFormUtil} from "./contact_form_util";
import {useFormik} from "formik";

const ContactForm: React.FC = () => {
    // const [contactFormInfo, setContactFormInfo] = useState<IContactFormInfo>();
    const {firstNameFormInput, secondNameFormInput, emailFormInput} = formInputAttrSetup()
    const {firstNameLabel, secondNameLabel, emailLabel} = formLabelAttrSetup()
    const formik = useContactFormUtil();

    return (
        <div className={'container'}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__group field">
                    <FormInput formInputFields={firstNameFormInput} formik={formik}/>
                    <FormLabel formLabelFields={firstNameLabel}/>
                    {formik.touched.firstName && formik.errors.firstName ?
                        <div className={'form_error'}>{formik.errors.firstName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={secondNameFormInput} formik={formik}/>
                    <FormLabel formLabelFields={secondNameLabel}/>
                    {formik.touched.secondName && formik.errors.secondName ?
                        <div className={'form_error'}>{formik.errors.secondName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={emailFormInput} formik={formik}/>
                    <FormLabel formLabelFields={emailLabel}/>
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