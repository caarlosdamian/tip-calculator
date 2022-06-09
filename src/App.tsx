import logo from "./images/logo.svg";
import "./App.scss";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <main className="app__container">
      <img src={logo} alt="logo" className="logo__img" />
      <Card />
    </main>
  );
}

export default App;
