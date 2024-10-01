import React from 'react';
import { Formik, Field, Form } from 'formik';
import { SignupSchema } from './SignupForm.types';

const FormPage = () => (
  <div>
    <h1>Signup Form</h1>
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormPage;
