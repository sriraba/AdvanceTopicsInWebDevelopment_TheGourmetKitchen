import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
