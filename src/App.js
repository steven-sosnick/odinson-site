import logo from './logo.svg';
import odinsonlogo from './odinsonlogo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={odinsonlogo} className="App-logo" alt="logo" />
        <p>
          The official site of Odinson Captial LLC 2
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
