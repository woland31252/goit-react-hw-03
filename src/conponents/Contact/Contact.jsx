import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import css from '../Contact/Contact.module.css'
export default function Contact({ contItem: {
    name,
    number
}}) {
    return (
        <>
            <div className={css.contact}>
                <p className={css.contactName}><BsFillPersonFill className={css.icon} />{name}</p>
                <a href="tel:{ number }" className={css.contactPhone}><BsFillTelephoneFill className={css.icon} />{number}</a>
            </div>
            <button type="button" className={css.btn}>Delete</button>
        </>
    )
}