import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import CharacterDetail from '../views/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
