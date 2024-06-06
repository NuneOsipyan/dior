import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import "./Profile.css";
const regions=["Boston","West North Central"," Mid-Atlantic","New York","St. Louis","Kansas City","Dallas","San Francisco"]
const Profile = () => {
  const validations_profile = yup.object().shape({
    name: yup.string().required("Must be filled in").matches(/^[A-Z][a-z]*$/, "Mistake"),
    lastName: yup.string().required("Must be filled in").matches(/^[A-Z][a-z]*$/, "Mistake"),
    phone: yup.string().required("Must be filled in").matches(/^\+[374]\d{8}$/, "Mistake"),
    mail: yup.string().required("Must be filled in").email("Mistake"),
    region: yup.string().required("Must be selected"),
    city: yup.string().required("Must be filled in").matches(/^[A-Z][a-z]*$/, "Mistake"),
    address: yup.string().required("Must be filled in"),
  });

  return (
    <div className='all_profile'>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          phone: "",
          mail: "",
          region: "",
          city: "",
          address: ""
        }}
        validationSchema={validations_profile}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form className='profile_inputs'>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="span" className='span_err'/>

            <Field name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="span" className='span_err'/>

            <Field name="phone" placeholder="Phone" />
            <ErrorMessage name="phone" component="span" className='span_err'/>

            <Field name="mail" placeholder="Mail" />
            <ErrorMessage name="mail" component="span" className='span_err'/>

            <Field name="region"  as="select" placeholder="Region" >
              {
                regions.map((r)=><option key={r}>{r}</option>)
              }
            </Field>
            <ErrorMessage name="region"className='span_err'/>

            <Field name="city" placeholder="City" />
            <ErrorMessage name="city" component="span" className='span_err'/>

            <Field name="address" placeholder="Address" />

         
            <ErrorMessage name="address" component="span" className='span_err'/>

            <div><button type='submit' className='profile_btn'>Send My Information</button></div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
