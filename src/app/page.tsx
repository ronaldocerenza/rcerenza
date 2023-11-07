import { Header } from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className="conteiner">
      <Header />
      <div className="experience">
        <h3>Experiência</h3>
        <p>Colocar texto</p>
      </div>
      <div className="experience-time">

      </div>
      <div className="infos">
        <h3>Linguagens</h3>
        <div className="linguages-info">
          <span>🇧🇷 PT-BR - Nativo</span>
          <span>🇪🇸 ES - Intermediário</span>
          <div className="Education">
            <span>🎓 UEMS - Economia</span>
            <span>🎓 Laureat - Docencia Superior</span>
            <span>🧠 Trybe - FullStack</span>
            <span>🎓 ITI - Cientista de Dados</span>
          </div>
        </div>
        <div className="buttons">
            <div className="social">

            </div>
            <button>Entre em Contato</button>
        </div>
      </div>
    </main>
  )
}
