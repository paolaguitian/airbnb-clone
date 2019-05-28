import * as yup from 'yup';

export const emailNotLongEnough = 'email must be longer';
export const invalidEmail = 'provide a valid email address';
export const passwordNotLongEnough = 'password must be longer';

export const registerPasswordValidaiton = yup
   .string()
   .min(6, passwordNotLongEnough)
   .max(255)
   .required();

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(6, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: registerPasswordValidaiton,
});

