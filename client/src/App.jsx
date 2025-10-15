import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {Header} from './pages/Header';
import Home from './pages/Home';
import Education from './pages/Education';
import Project from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
    </>
  )
}

export default App
