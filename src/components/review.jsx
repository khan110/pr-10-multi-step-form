import React from 'react';
 //import { Formik, Field, Form, ErrorMessage } from 'formik';
 //import * as Yup from 'yup';
 
 export const Review = ({values}) => {
   return (
       <div>
      <p>Area:{values.area}</p>
      <p>City:{values.city}</p>
      <p>Card Name:{values.CardName}</p>
      <p>Card Number:{values.CardNumber}</p>
      <p>Email:{values.email}</p>
      </div>  

   );
};
     