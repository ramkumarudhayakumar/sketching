import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiFeather } from "react-icons/gi";
import { FaGratipay } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <div className="row my-5">
        <div className="col-12 col-md-6 d-grid flex-column justify-content-center align-content-center">
          <h1>
            <span className="fw-bold" style={{ color: "#00ff00" }}>
              <Typewriter
                words={["Hi", "Hello", "Vanakkam"]}
                loop={Infinity}
                cursor
                cursorStyle={<GiFeather className="ms-2" />}
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h3 className="mt-3 app-row1-h3">Welcome to my Page</h3>
        </div>
        <div className="col-12 col-md-6">
          <img
            src="images/Welcome.png"
            style={{
              width: "500px",
              height: "500px",
              filter: "drop-shadow(#abf7b1 0px 4px 12px)",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mx-5 mx-md-0 mt-5">
          <div className="card card-1 ">
            <div className="card-body d-flex flex-column">
              <img
                src="images/pencil.jpg"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  filter: "blur(2px)",
                }}
                className="img-fluid "
              />
              <h3 className="text-center mt-5 fw-blod card-h3">
                Personal Training
              </h3>
              <button className="btn my-4 fw-bold card-button align-self-center">
                Pay Now <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mx-5 mx-md-0 mt-5">
          <div className="card card-2">
            <div className="card-body d-flex flex-column">
              <img
                src="images/brush.jpg"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  filter: "blur(2px)",
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
                Pay Now
                <IoIosArrowDropdownCircle className="ms-2 fs-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />

      <Link
        // to="/payment/page"
        className="text-decoration-none d-flex align-items-center justify-content-center"
      >
        <button
          className="btn app-button fw-bold mb-5 me-5"
          style={{ width: "200px", height: "50px", fontSize: "20px" }}
        >
          Pay Now
          <FaGratipay className="ms-2 mb-1" style={{ fontSize: "30px" }} />
        </button>
      </Link>
      {/* <Routes>
        <Route path="/payment/page" element={<PaymentPage />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
