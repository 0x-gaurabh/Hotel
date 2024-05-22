import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';
import Event from './components/Event';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Navbar />
   <Routes>
     <Route  path='/' element={<Home />} />
     <Route  path='room' element={<Room />} />
     <Route  path='event' element={<Event />} />
     <Route  path='about' element={<About />} />
     <Route  path='contact' element={<Contact />} />
   </Routes>
   <Footer></Footer>
   </>
  );
}

export default App;
