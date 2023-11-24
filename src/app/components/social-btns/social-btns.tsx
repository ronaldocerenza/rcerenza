import GitIcon from "../icons/git-icon";
import InstaIcon from "../icons/insta-icon";
import LinkedIcon from "../icons/linked-icon";
import "./social-btns.scss";

export default function SocialBtns() {
  return (
    <div className="social">
      <a href="">
        <InstaIcon />
      </a>
      <a href="">
        <LinkedIcon />
      </a>
      <a href="">
        <GitIcon />
      </a>
    </div>
  )
}
