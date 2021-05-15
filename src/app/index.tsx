import Header from "../components/Header";
import Menu from "../components/Menu";
import Routes from "./Routes";

import "./style.module.scss"

function App() {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Routes />
      </div>
    </>
  );
}

export default App;
