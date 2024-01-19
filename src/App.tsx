import React from 'react';
import { Navbar} from './components';
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, Footer } from './container'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      {/* <AboutUs /> */}
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
