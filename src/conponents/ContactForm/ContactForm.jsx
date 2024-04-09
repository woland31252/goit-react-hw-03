import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";

import css from '../ContactForm/ContactForm.module.css';

// export default function ContactForm({ onAdd }) {
    
//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         onAdd({
//             id: Date.now(),
//             name: evt.target.elements.name.value,
//             number: evt.target.elements.number.value
//         })
//         evt.target.reset();
// }

//     return (
//         <form className={ css.form} onSubmit={handleSubmit}>
//             <label className={css.formLable} htmlFor="">Name</label>
//             <input className={css.formInput} type="text" name="name"/>
//             <label className={css.formLable} htmlFor="">Number</label>
//             <input className={css.formInput} type="text"  name="number"/>
//             <button className={css.formBtn} type="submit">Add Contact</button>
//         </form>
//     ) 
// }



export default function ContactForm({ onAdd }) {
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required("Required"),
//   number: Yup.number().cast(111-11-11)("Must be a valid email!").required("Required"),
});

    const nameId = useId();
    const numberId = useId();

    const initValue = {
            id: Date.now(),
            name: "",
            number: ""
        }

    const handleSubmit = (values, actions) => {
        console.log(values)
        onAdd(values )
        actions.resetForm();
}

  return (
      <Formik
          initialValues={initValue}
          onSubmit={handleSubmit}
          validationSchema={ContactSchema}>
          
          <Form className={ css.form}>
                <label className={css.formLable} htmlFor={nameId}>Name</label>
                <Field className={css.formInput} type="text" name="name" id={ nameId} />
                <label className={css.formLable} htmlFor={numberId}>Number</label>
                <Field className={css.formInput} type="text" name="number" id={ numberId} />
				<button className={css.formBtn} type="submit">Add Contact</button>
			</Form>
        </Formik>
    )
}
