import * as yup from "yup"
export let signin=yup.object({

name:yup.string().required('please enter your username').min(3),
email:yup.string().required('please enter email').email("invalid email format"),
phoneNo:yup.string().required('please enter phoneNo').min(10).max(10),
age: yup
    .number()
    .required('Age is required')
    .typeError('Age must be a number')
    .min(18)
    .max(60),

  message: yup
    .string()
    .max(200)
    


})