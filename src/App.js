import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      {(isPlaying) ? null : <MainMenu />}
    </div>
  );
}

export default App;
