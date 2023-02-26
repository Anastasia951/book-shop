import 'normalize.css'
import './styles/main.scss'
import './styles/header.scss'
import './styles/main-block.scss'
import './styles/books.scss'
import './styles/author.scss'
import './styles/trusted.scss'
import './styles/get-book.scss'
import './styles/learn.scss'
import './styles/knowledge.scss'
import './styles/rating.scss'

function clickHandler() {
  list.classList.toggle('visible')
  burger.classList.toggle('closed')
  document.body.classList.toggle('lock')
}

const list = document.querySelector("[data-list]")
const burger = document.querySelector("[data-burger]")


burger.addEventListener('click', clickHandler)