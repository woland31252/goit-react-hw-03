import css from '../ContactList/ContactList.module.css'
import Contact from '../Contact/Contact'
export default function ContactList({ contacts }) {
    return (
        <ul className={css.contList}>
            {contacts.map(cont => (<li key={cont.id} className={css.contItem}><Contact contItem={cont}/></li>))}
        </ul>

    )
}