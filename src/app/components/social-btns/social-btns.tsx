import GitIcon from "../icons/git-icon";
import InstaIcon from "../icons/insta-icon";
import LinkedIcon from "../icons/linked-icon";
import "./social-btns.scss";

export default function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/ronaldocerenza/">
        <InstaIcon />
      </a>
      <a href="https://www.linkedin.com/in/ronaldocerenza/">
        <LinkedIcon />
      </a>
      <a href="https://github.com/ronaldocerenza">
        <GitIcon />
      </a>
    </div>
  )
}
