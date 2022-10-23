import './App.css';
import './style/global.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import Inventory from './pages/Inventory';
import AddNewFood from './pages/AddNewFood';

// console.log("server is "+ process.env.REACT_APP_BACKEND_URL)

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/failed' element={'login failed'} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/addfood' element={<AddNewFood />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
