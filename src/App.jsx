import { Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
