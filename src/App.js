import React from 'react';
import Header from './components/mainComponents/header/Header';
import Main from './components/mainComponents/body/Body';
import Footer from './components/mainComponents/footer/Footer';
import './App.css';

const App = () => {
console.log('render');
  return (
      <div>
        <Header/>
        <Main />
        <Footer/>
      </div>
  );
}

export default App;