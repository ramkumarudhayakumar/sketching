import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import ParticleBackground from "./components/ParticleBackground";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center mt-5">
          <div className="card card-1">
            <div className="card-body d-flex flex-column">
              <img
                src="images/main-background.jpeg"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                }}
                className="img-fluid "
              />
              <h3 className="text-center mt-5 fw-blod card-h3">
                Personal Training
              </h3>
              <button className="btn my-4 fw-bold card-button align-self-center">
                LEARN MORE <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center mt-5">
          <div className="card card-2">
            <div className="card-body d-flex flex-column">
              <img
                src="images/scanner-background.jpeg"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                }}
                className="img-fluid"
              />
              <h3
                className="text-center mt-5 fw-blod card-h3"
                style={{ color: "linear-gradient(#14469F,#DA3068)" }}
              >
                Online Training
              </h3>
              <button className="btn my-4 fw-bold card-button align-self-center">
                LEARN MORE
                <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
