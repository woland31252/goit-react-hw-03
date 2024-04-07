import Contact from '../Contact/Contact'
export default function ContactList({ contacts }) {
    return (
        <ul>
            {contacts.map(cont => (<li key={cont.id}><Contact contItem={cont}/></li>))}
        </ul>

    )
}