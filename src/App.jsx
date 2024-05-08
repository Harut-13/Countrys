import './App.css'
import { useEffect, useReducer } from 'react';
import { reducer, initialState } from './store/store';
import {countriesAPI} from './api/api'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  const [state, dispatch]=useReducer(reducer, initialState)

  useEffect(()=>{
    countriesAPI.getAll(dispatch)

  }, [])
  return (
  <div className='App'>
   <Routes>
    <Route path='/' element={<Home  countries={state.countries}/>}/>
   </Routes>
  </div>
  )
}

export default App;
