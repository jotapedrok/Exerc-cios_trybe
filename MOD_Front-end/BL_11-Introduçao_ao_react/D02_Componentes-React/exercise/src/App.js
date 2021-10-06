import './App.css';
import Pokecard from './components/pokecard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Pokedex</h1>
      </header>
      <main className="App-main">
        <Pokecard />
      </main>
    </div>
  );
}

export default App;
