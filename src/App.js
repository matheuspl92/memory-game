import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GameScreen from './components/GameScreen/GameScreen';
import MainMenu from './components/MainMenu/MainMenu';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [diff, setDiff] = useState(1);

  const startGame = () => {
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
  };

  return (
    <div className="App">
      {(isPlaying) ? <GameScreen diff={diff} endGame={endGame}/> : <MainMenu diff={diff} setDiff={setDiff} startGame={startGame} />}
    </div>
  );
}

export default App;
