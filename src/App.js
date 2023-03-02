import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GameScreen from './components/GameScreen/GameScreen';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = (diff) => {
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
  };

  return (
    <div className="App">
      {(isPlaying) ? <GameScreen endGame={endGame}/> : <MainMenu startGame={startGame} />}
    </div>
  );
}

export default App;
