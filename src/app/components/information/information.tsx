import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Information() {
  return (
    <div className="infos">
    <SectionTitle text="Linguagens"/>
    <div className="languages-info">
      <span>🇧🇷 PT-BR - Nativo</span>
      <span>🇪🇸 ES - Intermediário</span>
    </div>
    <SectionTitle text="Educação"/>
    <div className="Educational-info">
      <span>🎓 UEMS - Economia</span>
      <span>🎓 Laureat - Docencia Superior</span>
      <span>🧠 Trybe - FullStack</span>
      <span>🎓 ITI - Cientista de Dados</span>
    </div>
  </div>
  )
}
