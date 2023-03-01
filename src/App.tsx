import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index/Index';
import GlobalStyles from './styles/GlobalStyles';
import Structure from './components/Structure';

function App() {
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
