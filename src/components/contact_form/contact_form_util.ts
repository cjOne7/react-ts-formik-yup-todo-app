import {FormikProps, useFormik} from "formik";
import * as Yup from 'yup';

export interface IContactFormValues {
    email: string
    firstName: string
    secondName: string
    // [key: string]: string
}

const validate = (values: IContactFormValues) => {
    const errors: IContactFormValues = {
        email: '',
        firstName: '',
        secondName: ''
    }
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.secondName) {
        errors.secondName = 'Required';
    } else if (values.secondName.length > 20) {
        errors.secondName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors
}

export function useContactFormUtil(): FormikProps<IContactFormValues> {
    return useFormik<IContactFormValues>({
        initialValues: {
            email: '',
            firstName: '',
            secondName: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        }
    })
}