import "./experience.scss";
import { SectionTitle } from "../sectionTitle/section-title";
import JsIcon from "../icons/js-icon";
import ReactIcon from "../icons/react-icon";
import TsIcon from "../icons/ts-icon";
import PythonIcon from "../icons/python-icon";
import CspIcon from "../icons/csp-icon";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiência"/>
      <p>Transição de carreira busca de novos conhecimentos para Desenvolvedor Full-Stack.</p>
      <p>Minha Experiência em desenvolvimento de aplicações web tem base em projetos pessoais e estudos, mais de um ano de Trybe.</p>
      <div className="experience-time">
        <div className="experience-language">
          <JsIcon />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>Mais de 4 projetos</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <ReactIcon />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
            <span>Mais de 4 projetos</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <TsIcon />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
            <span>4 projetos</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <PythonIcon />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
            <span>4 projetos</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <CspIcon />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>2 projetos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
