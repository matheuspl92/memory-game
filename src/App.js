import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = (diff) => {
    setIsPlaying(true);
  };

  return (
    <div className="App">
      {(isPlaying) ? null : <MainMenu startGame={startGame} />}
    </div>
  );
}

export default App;
