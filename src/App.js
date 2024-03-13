import './App.css';

import React from 'react'
import Main from './main.jsx'
import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div classname="container">
        <Canvas>
          <Main />
        </Canvas>
      </div>
    </div>
    
  );
}

//export default App;
