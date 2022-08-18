import {FormikProps, useFormik} from "formik";
import {object, string} from 'yup';

const FIRST_NAME_LENGTH = 15;
const SECOND_NAME_LENGTH = 15;

export interface IContactFormValues {
    email: string
    firstName: string
    secondName: string
}

export function useContactFormUtil(): FormikProps<IContactFormValues> {
    return useFormik<IContactFormValues>({
        initialValues: {
            email: '',
            firstName: '',
            secondName: ''
        },
        validationSchema: object({
            email: string().email('Invalid email address').required('Required'),
            firstName: string()
                .max(FIRST_NAME_LENGTH, `Must be ${FIRST_NAME_LENGTH} characters or less`)
                .required('Required'),
            secondName: string()
                .max(SECOND_NAME_LENGTH, `Must be ${SECOND_NAME_LENGTH} characters or less`)
                .required('Required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        }
    })
}