import Header from "../components/Header";
import Menu from "../components/Menu";
import Routes from "./Routes";

import "./style.scss"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Menu />
        <Routes />
      </div>
    </>
  );
}

export default App;
