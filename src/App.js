import logo from './logo.svg';
import './App.css';

const BUILD_ENV = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Dashboard! - {BUILD_ENV}
        </p>
        
      </header>
    </div>
  );
}

export default App;
