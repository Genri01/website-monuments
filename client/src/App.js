import './App.css';
import Main from './routes/index';
import HeaderMenu from './components/HeaderMenu'

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
