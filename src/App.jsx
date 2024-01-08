import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Player from './pages/Player';
import Netflix from './pages/Netflix';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';


const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/player' element={<Player/>}></Route>
      <Route exact path='/' element={<Netflix/>}></Route>
      <Route exact path='/tv' element={<TvShows/>}></Route>
      <Route exact path='/movies' element={<Movies/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;