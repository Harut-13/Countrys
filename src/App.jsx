import './App.css'
import { useEffect, useReducer } from 'react';
import { reducer, initialState } from './store/store';
import {countriesAPI} from './api/api'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CountryPage from './pages/Home/Country/CountryPage';
import Header from './components/Country/Header/Header';


function App() {
  const [state, dispatch]=useReducer(reducer, initialState);

   console.log(state);
    useEffect(()=>{
    countriesAPI.getAll(dispatch)
  }, []);

  return (
  <div className='App'>
    <Header dispatch={dispatch} state={state}/>
   <Routes>
    <Route path='/' element={<Home  countries={state.countries}/>}/>
    <Route path='/:name' element={<CountryPage country={state.country} dispatch={dispatch}/>}/>
   </Routes>
  </div>
  )
}

export default App;
