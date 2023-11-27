import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Information() {
  return (
    <div className="infos">
    <SectionTitle text="Linguagens"/>
    <div className="languages-info">
      <p>🇧🇷 PT-BR - Nativo</p>
      <p>🇪🇸 ES - Intermediário</p>
    </div>
    <SectionTitle text="Educação"/>
    <div className="educational-info">
      <p>🎓 UEMS - Economia</p>
      <p>🎓 Laureat - Docencia Superior</p>
      <p>🧠 Trybe - FullStack</p>
      <p>🎓 ITI - Cientista de Dados</p>
    </div>
  </div>
  )
}
