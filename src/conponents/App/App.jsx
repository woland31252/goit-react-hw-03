// import { useState } from 'react'
import contacts from '../contacts.json'
import css from '../App/App.module.css'
// import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <ContactList contacts={contacts} />
    </>
  )
}

export default App
