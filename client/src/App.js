import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import TimeLine from './Pages/Timeline/TimeLine';
import Friends from './Pages/Friends/Friends';
import Videos from './Pages/Videos/Videos';

function App() {
  AOS.init();


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TimeLine />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/video' element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
