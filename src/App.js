import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description';
import FeedBack from './Components/FeedBack';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
