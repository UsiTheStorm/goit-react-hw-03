import * as Yup from 'yup';

const contactFormSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(2, 'Name is too short')
    .max(15, 'Name is too long')
    .required('Required'),
  contactNumber: Yup.string()
    .min(6, 'Number is too short')
    .max(11, 'Number is too long')
    .required('Required')
    .matches(new RegExp('^[0-9]+$'), 'Use digits only'),
});

export default contactFormSchema;
