
import Header from "./components/Header";
import PromoWindow from "./components/PromoWindow";
import TilesRow from "./components/TilesRow";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PromoWindow />
      <main>
        <TilesRow />
      </main>
    </div>
  );
}

export default App;
