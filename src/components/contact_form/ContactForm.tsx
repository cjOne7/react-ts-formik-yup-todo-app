import React from 'react';
import './contact_form_styles.css'
import FormInput from "./contact_from_ui/FormInput";
import FormLabel from "./contact_from_ui/FormLabel";
import {useFormFormik, formLabelAttrSetup} from './objects'

const ContactForm: React.FC = () => {
    // const [contactFormInfo, setContactFormInfo] = useState<IContactFormInfo>();
    const {formik, firstNameFormInput, secondNameFormInput, emailFormInput} = useFormFormik()
    const {firstNameLabel, secondNameLabel, emailLabel} = formLabelAttrSetup()

    return (
        <div className={'container'}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__group field">
                    <FormInput formInputFields={firstNameFormInput}/>
                    <FormLabel formLabelFields={firstNameLabel}/>
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={secondNameFormInput}/>
                    <FormLabel formLabelFields={secondNameLabel}/>
                    {formik.errors.secondName ? <div>{formik.errors.secondName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={emailFormInput}/>
                    <FormLabel formLabelFields={emailLabel}/>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <input type="submit" value={'Submit'}/>
            </form>
        </div>
    );
};

export default ContactForm;