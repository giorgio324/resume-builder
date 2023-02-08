import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Resume from './routes/resume';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}

export default App;
