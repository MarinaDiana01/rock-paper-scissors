import './GameSection.css';
import { useState } from 'react';

const GameSection = () => {
  let [selectedOptionOne, setSelectedOptionOne] = useState('');
  let [selectedOptionTwo, setSelectedOptionTwo] = useState('');
  let [gameResult, setGameResult] = useState('');

  const handleSelectionPlayerOne = (e) => {
    setSelectedOptionOne(e.target.value);
  };

  const handleSelectionPlayerTwo = (e) => {
    setSelectedOptionTwo(e.target.value);
  };

  const foundWinner = (p1, p2) => {
    if (p1 === '' && p2 === '') {
      return "Select options for players";
    }

    if (p1 === '' || p2 ===  '') {
      if (p1 === '') {
        return "Select option for player 1";
      } else {
        return "Select option for player 2";
      }
    }

    if (p1 === p2) {
      return "Tie";
    }
  
    const result = (p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') ? "Player 1 wins!" : "Player 2 wins!";
    return result;
  };

  const handlePlayGame = () => {
    const result = foundWinner(selectedOptionOne, selectedOptionTwo);
    setGameResult(result);
  };


  return (
    <section className="game-container">
      <h1 className="game-title"> Rock | Paper | Scissors </h1>

      <p className="game-winner-message"> {gameResult} </p>
      <h2 className="game-player"> Player 1: </h2>
      <select onChange={handleSelectionPlayerOne} className="game-option">
        <option value=""></option>
        <option value="rock"> Rock </option>
        <option value="paper"> Paper </option>
        <option value="scissors"> Scissors </option>
      </select>

      <h2 className="game-player"> Player 2: </h2>
      <select onChange={handleSelectionPlayerTwo} className="game-option">
      <option value=""></option>
        <option value="rock"> Rock </option>
        <option value="paper"> Paper </option>
        <option value="scissors"> Scissors </option>
      </select>

      <button onClick={handlePlayGame} className="game-play-button"> Play </button>
    </section>
  )
};

export default GameSection;