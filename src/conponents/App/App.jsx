import { useState } from 'react'
import contacts from '../contacts.json'
import css from '../App/App.module.css'
// import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
function App() {
  const [findContact, setFindContact] = useState(contacts)

  const handleFindContact = (evt) => {
    const findElem = setFindContact(evt.target.value);
    findContact.filter(elem => elem.findElem)
  }

  return (
    <div className={css.container}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <SearchBox onFind={ handleFindContact} />
      <ContactList contacts={findContact} />
    </div>
  )
}

export default App
