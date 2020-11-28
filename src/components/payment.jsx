import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 export const Payment = ({submit, setFormValues,  prevValues}) => {
   return (
     <Formik
       initialValues={{ CardName: '', CardNumber: '' }}
       validationSchema={Yup.object({
         CardName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         CardNumber: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required')
       })}
       onSubmit={(values) => {
        submit(2)
        setFormValues({...values,...prevValues})
       }}
     >
       <Form>
         <label htmlFor="CardName">Card Name</label>
         <Field name="CardName" type="text" />
         <ErrorMessage name="CardName" />
         <br/>
         <label htmlFor="CardNumber">Card Number</label>
         <Field name="CardNumber" type="text" />
         <ErrorMessage name="CardNumber" />
         
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   );
 };