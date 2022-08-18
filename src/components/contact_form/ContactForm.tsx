import React from 'react';
import './contact_form_styles.css'
import FormInput from "./contact_from_ui/FormInput";
import FormLabel from "./contact_from_ui/FormLabel";
import {useFormInputAttrSetup, formLabelAttrSetup} from './contactFormObjectsSetup'

const ContactForm: React.FC = () => {
    // const [contactFormInfo, setContactFormInfo] = useState<IContactFormInfo>();
    const {formik, firstNameFormInput, secondNameFormInput, emailFormInput} = useFormInputAttrSetup()
    const {firstNameLabel, secondNameLabel, emailLabel} = formLabelAttrSetup()

    return (
        <div className={'container'}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__group field">
                    <FormInput formInputFields={firstNameFormInput}/>
                    <FormLabel formLabelFields={firstNameLabel}/>
                    {formik.errors.firstName ? <div className={'form_error'}>{formik.errors.firstName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={secondNameFormInput}/>
                    <FormLabel formLabelFields={secondNameLabel}/>
                    {formik.errors.secondName ? <div className={'form_error'}>{formik.errors.secondName}</div> : null}
                </div>
                <div className="form__group field">
                    <FormInput formInputFields={emailFormInput}/>
                    <FormLabel formLabelFields={emailLabel}/>
                    {formik.errors.email ? <div className={'form_error'}>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <input type="submit" value={'Submit'}/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;