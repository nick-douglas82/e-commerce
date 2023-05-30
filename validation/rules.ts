import * as yup from 'yup'

export const checkoutSchema = yup.object().shape({
    email: yup
        .string()
        .email('This must be a valid email address')
        .required('This field is required'),
    firstname: yup.string().required('This field is required'),
    lastname: yup.string().required('This field is required'),
    namenumber: yup.string().required('This field is required'),
    address: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    county: yup.string().required('This field is required'),
    country: yup.string().required('This field is required'),
    postcode: yup.string().required('This field is required'),
    phone: yup.string().required('This field is required'),
})
