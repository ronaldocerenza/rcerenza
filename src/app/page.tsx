import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Information } from './components/information/information'
import { EmailIcon } from './components/icons/email-icon'
import './styles/home.scss'
import SocialBtns from './components/social-btns/social-btns'

export default function Home() {
  return (
    <main className="conteiner">
      <Header />
      <Experience />
      <Information />
      <div className="buttons">
          <SocialBtns />
          <a className='btn-primary' href="mailto:rockronald@gmail.com">
          Entre em Contato
          <EmailIcon />
          </a>
      </div>
    </main>
  )
}
