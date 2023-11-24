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
          <button className='btn-primary'>
          Entre em Contato
          <EmailIcon />
          </button>
      </div>
    </main>
  )
}
