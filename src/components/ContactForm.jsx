import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import contactFormSchema from '../validation/contactFormValidation.js';

function ContactForm({ onAddContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  function handleSubmit(values, actions) {
    const newContact = {
      ...values,
      id: crypto.randomUUID(),
      name: values.contactName,
      number: values.contactNumber,
    };
    onAddContact(newContact);
    actions.resetForm();
  }

  return (
    <div className="section-container contact-form-section">
      <Formik
        initialValues={{ contactName: '', contactNumber: '' }}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form">
          <div className="contact-form-field">
            <label className="label" htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className="input"
              type="text"
              name="contactName"
              id={nameFieldId}
              placeholder="Enter name"
            />
            <ErrorMessage className="error-message" name="contactName" component={'span'} />
          </div>

          <div className="contact-form-field">
            <label className="label" htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className="input"
              type="tel"
              name="contactNumber"
              id={numberFieldId}
              placeholder="Enter phone"
            />
            <ErrorMessage className="error-message" name="contactNumber" component={'span'} />
          </div>

          <button type="submit" className="btn add-btn">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
