import React from 'react';
import "./App.css"
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Content } from './components/Page/Content';

function App() {
  return (
    <div className='App'>
      <div className='wrap'>
        <Header />
        <div className='main'>
          <Content />
        </div>
        <Footer year={new Date().getFullYear()} />
      </div>
    </div>
  )
}

export default App;
