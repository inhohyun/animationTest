// src/App.js
import React from 'react';
import Example from './components/menu/Example';
import Main from './pages/main/index';
import "./components/menu/style.css";

function App() {
  return (
    <>
      <div className="App">
        <Example />
      </div>
      <Main />
    </>
  );
}

export default App;
