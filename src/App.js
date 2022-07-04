import React from 'react';
import Header from './components/mainComponents/header/Header';
import Main from './components/mainComponents/main/Main';
import Footer from './components/mainComponents/footer/Footer';
import './App.css';

const App = () => {

  return (
      <div className={App}>
        <Header/>
        <Main />
        <Footer/>
      </div>
  );
}

export default App;