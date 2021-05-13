import Home from "../Home"

import "./style.module.scss"

export default function Menu() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <a href="/">
              <Home />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">
            <h1>Company Name</h1>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}