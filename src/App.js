import React, {useState, useEffect} from 'react';
import Header from './components/mainComponents/header/Header';
import Main from './components/mainComponents/main/Main';
import Footer from './components/mainComponents/footer/Footer';
import PostApiError from './components/commonComponents/sideComponents/PostApiError';
import FinalPage from './components/commonComponents/sideComponents/FinalPage';
import PageNotExist from './components/commonComponents/sideComponents/PageNotExist';
import {Routes, Route} from 'react-router-dom';
import {location, routes} from './utils/common/constants';

const App = () => {

  const [showHeaderFooter, setShowHeaderFooter] = useState(false)
  const [headerHeight, setHeaderHeight] = useState('');

  useEffect(() => {
    const identifyOneOfPath = Object.values(routes).map(route => route === location);
    const nonsensPath = identifyOneOfPath.every(element => element === false)
    if(nonsensPath === false) {
      setShowHeaderFooter(true);
    } else {
      setShowHeaderFooter(false);
    }
    // eslint-disable-next-line
  }, [location]);

  return (
      <div>
        {showHeaderFooter && <Header setHeaderHeight={setHeaderHeight} />}
          <Routes>
            <Route path='/' element={<Main headerHeight={headerHeight} />} />
            <Route path='/no_data_sent' element={<PostApiError />} />  
            <Route path='/done' element={<FinalPage />} />  
            <Route path='*' element={<PageNotExist />} />
          </Routes>
        {showHeaderFooter && <Footer/>}
      </div>
  );
}

export default App;