import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notfound/NotFound";
import LogementDescription from "./pages/logementDescription/LogementDescription";
import logements from "./data/logements.json";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          {" "}
          {/* On passe logements en props */}
          <Route path="/" element={<Home logements={logements} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/logement/:id"
            element={<LogementDescription logements={logements} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer /> {/* Affichage du footer et header sur toutes les pages */}
    </>
  );
}

export default App;
