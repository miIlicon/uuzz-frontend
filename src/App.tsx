import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index/Index';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import Structure from './components/Structure';

function App() {

  // useEffect(() => {
  //   axios.get('/hello')
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  // }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route element={<Structure />}>
            <Route path="/" element={<Index />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
