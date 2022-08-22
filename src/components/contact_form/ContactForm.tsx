import React from 'react';
import './contact_form_styles.css'
import {formInputAttrSetup, formLabelAttrSetup} from './contact_form_objects_setup'
import {useContactFormUtil} from "./contact_form_util";

const ContactForm: React.FC = () => {
    const {firstNameFormInput, secondNameFormInput, emailFormInput} = formInputAttrSetup()
    const {firstNameLabel, secondNameLabel, emailLabel} = formLabelAttrSetup()
    const formik = useContactFormUtil();
    return (
        <div className={'container'}>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__group field">
                    <input {...firstNameFormInput}
                           {...formik.getFieldProps('firstName')}/>
                    <label {...firstNameLabel}/>
                    {formik.touched.firstName && formik.errors.firstName
                        && <div className={'form_error'}>{formik.errors.firstName}</div>
                    }
                </div>
                <div className="form__group field">
                    <input {...secondNameFormInput}
                           {...formik.getFieldProps('secondName')}/>
                    <label {...secondNameLabel}/>
                    {formik.touched.secondName && formik.errors.secondName
                        && <div className={'form_error'}>{formik.errors.secondName}</div>
                    }
                </div>
                <div className="form__group field">
                    <input {...emailFormInput}
                           {...formik.getFieldProps('email')}/>
                    <label {...emailLabel}/>
                    {formik.touched.email && formik.errors.email
                        && <div className={'form_error'}>{formik.errors.email}</div>
                    }
                </div>
                <div>
                    <input type="submit" value={'Submit'}/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;