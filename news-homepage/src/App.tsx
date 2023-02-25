import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HeaderImage from './components/HeaderImage/HeaderImage';
import News from './components/News/News';
import TopNews from './components/TopNews/TopNews';

function App() {

  return (
    <>
      <Navigation />
      <main className="App">
        <HeaderImage />
        <News />
        <TopNews />
      </main>
    </>
  )
}

export default App
