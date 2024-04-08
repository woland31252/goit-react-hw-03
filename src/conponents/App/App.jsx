import { useState } from 'react'
import contacts from '../contacts.json'
import css from '../App/App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
function App() {
  const [contact, setContact] = useState(contacts);
  const [filter, setFilter] = useState("")

  const addContact = (newContact) => {
    setContact((curentData) => {
      return [...curentData, newContact];
    });
  };  

  const deleteContact = (contId) => {
    setContact((curentData) => {
    return curentData.filter((elem) => elem.id !== contId)
  })
}

  const filterContact = contact.filter((cont) => cont.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={css.container}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <ContactForm onAdd={ addContact} />
      <SearchBox value={filter} onFilter={ setFilter} />
      <ContactList contacts={filterContact} onDelete={ deleteContact} />
    </div>
  )
}

export default App
