// import clsx from 'clsx';
import css from '../ContactForm/ContactForm.module.css';

export default function ContactForm({ onAdd }) {
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAdd({
            id: Date.now(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value
        })
        evt.target.reset();
}

    return (
        <form className={ css.form} onSubmit={handleSubmit}>
            <label className={css.formLable} htmlFor="">Name</label>
            <input className={css.formInput} type="text" name="name"/>
            <label className={css.formLable} htmlFor="">Number</label>
            <input className={css.formInput} type="text"  name="number"/>
            <button className={css.formBtn} type="submit">Add Contact</button>
        </form>
    ) 
}