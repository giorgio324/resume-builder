import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Resume from './routes/build/build.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/build' element={<Resume />} />
    </Routes>
  );
}

export default App;
