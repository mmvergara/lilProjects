import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>

        <p className='text-xl sm:font-bold text-white inline pl-5 pr-2 bg-gradient-to-r  to-blue-500 from-black box-decoration-clone'>
          This is a Sample Text<br />
          This is the second Sample <br />
          </p>
    </div>
  );
}

export default App;
