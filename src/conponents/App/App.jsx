import { useState } from 'react'
import contacts from '../contacts.json'
import css from '../App/App.module.css'
// import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
function App() {
  const [contact, setContact] = useState(contacts);
  const [filter, setFilter] = useState("")

  

  const filterContact = contact.filter((cont) => cont.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.container}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <SearchBox value={filter} onFilter={ setFilter} />
      <ContactList contacts={filterContact} />
    </div>
  )
}

export default App
