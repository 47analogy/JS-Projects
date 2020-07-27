import React from 'react';
import './App.css';
import PropertyList from './components/PropertyList'
// import Content from './components/StyledcardExample/Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropertyList />
        {/* <Content /> */}
      </header>
    </div>
  );
}

export default App;
