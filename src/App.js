import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Resume from './routes/build/build';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/build' element={<Resume />} />
    </Routes>
  );
}

export default App;
