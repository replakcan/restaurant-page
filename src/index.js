import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import { emptyDivContentById } from './lib/empty-div-content-by-id'
import './reset.css'
import './styles.css'

HomePage()

document.querySelector('button[id^="home"]').addEventListener('click', () => {
  emptyDivContentById('content')

  HomePage()
})

document.querySelector('button[id^="menu"]').addEventListener('click', () => {
  emptyDivContentById('content')

  MenuPage()
})

document.querySelector('button[id^="contact"]').addEventListener('click', () => {
  emptyDivContentById('content')

  ContactPage()
})
