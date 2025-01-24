import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/notfound/NotFound';
import logements from './data/logements.json';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home logements={logements}/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
