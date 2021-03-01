import './App.css';
import playersData from './data/data.json';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/player';
import Hire from './components/Hire/Hire';

function App() {
  const [player, setPlayer] = useState([]);
  const [hire, setHire] = useState([]);

  useEffect(()=>{
    setPlayer(playersData);
    console.log(playersData);
  }, [])

  const handlePlayerHire = (player) =>{
    const newHire = [...hire, player];
    setHire(newHire);
  }

  return (
    <div>
      <Header></Header>
      <h2>Player on Line: {player.length}</h2>
      <h2>Player Hired: {hire.length}</h2>
      <Hire hire={hire}></Hire>
      <ul>
        {
          player.map(pl => <Player player={pl} handlePlayerHire={handlePlayerHire}></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
