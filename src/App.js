import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import FunFact from './FunFact';
import MyName from './MyName';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <h1>The new app is here!</h1>
      <h2>Here is some stuff</h2>

      <MyComponent/>
      <MyName customName="Whoodly Doodly" />
      <MyName customName="Secondly Peckondly" />
      <MyName customName="Thurdly Durdly" />
      <FunFact/>
 

      <Example />
    </div>
  ); 
}

export default App;
