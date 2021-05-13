import LogoTractian from "./Logo-Tractian.svg"

import "./style.module.scss"

export default function Header(){
  return (
    <header>
      <img src={LogoTractian} alt="Logo Tractian" />
      <h4>MONITOR</h4>
    </header>
  )
}