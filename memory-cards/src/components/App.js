import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Fruits';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import Header from './Header';

function App() {
  const [cards] = useState(Cards);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    shuffle();
  })

  const handleClick = (fruit) => {
    if (clickedCards.includes(fruit)) {
      setScore(0);
      setClickedCards([]);
      score > highscore ? setHighscore(score) : setHighscore(highscore);
    } else {
      setClickedCards([...clickedCards, fruit]);
      setScore(score + 1);
    }
  }

  const shuffle = () => {
    let shuffledCards = cards;
    for(let i = shuffledCards.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * (i + 1));
      let temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[randomNum];
      shuffledCards[randomNum] = temp;
    }
  }


  const displayCards = cards.map((card) =>
    <li key={card.id}>{card.food}</li>
  );
  return (
    <div className="App">
      <Header />
      <ScoreBoard score={score} highscore={highscore} />
      <div className="card-grid">
        {cards.map((card) =>
          <Card 
          handleClick={handleClick} 
          key={card.id} 
          id={card.id} 
          fruit={card.food} 
          img={card.img} />
        )}
      </div>
    </div>
  );
}

export default App;


// const [cards, setCards] = useState(Cards);
// const [score, setScore] = useState(0);
// const [highscore, setHighscore] = useState(0);
// const [clickedCards, setClickedCards] = useState([]);

// const shuffle = (arr) => {