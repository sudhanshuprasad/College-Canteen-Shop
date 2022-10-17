import './App.css';
import './style/global.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
