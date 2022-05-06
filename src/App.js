import './App.css';
import MovieFetchData from './components/MovieFetchData';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      { <Header />}
      <MovieFetchData />

    </div>
  );
}

export default App;
