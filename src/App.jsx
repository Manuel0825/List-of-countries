import { Routes, Route } from 'react-router-dom';
import { Countries } from './pages/Countries'
import { Home } from './pages/Home'
import { DetailsCountries } from './pages/DetailsCountries';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries /:id" element={<DetailsCountries />} />
      </Route>
    </Routes>
  );
}

export default App
