import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Olá eu sou Ronaldo! 👋</h1>
        <h2>Desenvolvedor Full-Stack</h2>
      </div>
      <Image
        src="/rockTrem.jpg"
        alt="Ronaldo Cerenza sentado no trilho de trem em Itamarati"
        width={300}
        height={420}
        priority
      />
  </div>
  )
}