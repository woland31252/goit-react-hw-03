// import { useState } from 'react'
import contacts from '../contacts.json'
import './App.css'
// import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </>
  )
}

export default App
