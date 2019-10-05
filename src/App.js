import React from 'react';
import Products from './components/Products';

class App extends React.Component {
  render() {
  return (
    <div>
      <header className="App-header">
        <p>Products Inventory App</p>
      </header>
      <Products />
    </div>
  );
}
}

export default App;
