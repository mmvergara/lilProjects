import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LayoutPrac from './components/LayoutPrac';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <main className='m-4 bg-white rounded-3xl p-4'>
        <LayoutPrac/>
      </main>

    </div>
  );
}

export default App;
