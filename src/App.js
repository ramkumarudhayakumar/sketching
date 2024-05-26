import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Services from "./pages/Services";
import PayNowButton from "./pages/PayNowButton";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./components/Footer";
import SampleArt from "./pages/SampleArt";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Fragment>
              <Header />
              <Main />
              <About />
              <Services />
              <PayNowButton />
              <Footer />
            </Fragment>
          }
        />
        <Route path="/payment/page" element={<PaymentPage />} />
        <Route path="/sample/art" element={<SampleArt />} />
      </Routes>
    </div>
  );
}

export default App;
