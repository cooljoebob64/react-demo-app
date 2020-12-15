import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import FunFact from './FunFact';
import MyName from './MyName';

function App() {
  return (
    <div className="App">
      <h1>The new app is here!</h1>
      <h2>Here is some stuff</h2>

      <MyComponent></MyComponent>
      <MyName></MyName>
      <FunFact></FunFact>
    </div>
  );
}

export default App;
