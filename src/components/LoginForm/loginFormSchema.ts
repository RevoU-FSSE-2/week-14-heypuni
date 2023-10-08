import * as yup from 'yup'

export const initialValues = {
    email: '',
    password: ''
}

export const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid Email!").required('Please Enter Your Email'),
    password: yup.string().required('Please Enter Your Password')
})