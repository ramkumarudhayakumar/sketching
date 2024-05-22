import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <div className="row">
        <div className="col">
          {/* <div className="card">
            <div className="card-body"></div>
          </div> */}
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
