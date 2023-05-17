
import './App.css';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='About' element={<About />} />
          <Route exact path='Projects' element={<Projects />} />
          <Route exact path='Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
