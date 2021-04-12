import React, { useEffect, useState } from "react";
import FlashcardList from './components/FlashcardList/FlashcardList';

function App() {
  const [cards, setCards] = useState([])
  const url = 'https://opentdb.com/api.php?amount=12';
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.response_code) return;
        console.log(resp.results);
        setCards(
          resp.results.map((item, index) => {
            const correct_answer= decodeString(item.correct_answer);
            const decoded_answers = item.incorrect_answers.map(ic => decodeString(ic));
            return {
              id: `${index}-${Date.now()}`,
              category: item.category,
              difficulty: item.difficulty,
              question: decodeString(item.question),
              answer: correct_answer,
              type: item.type,
              options: [...decoded_answers, correct_answer]
            }
          })
        )
      })
  }, [])
  return (
    <FlashcardList flashcards={cards} />
  );
}

const entities = {
  '&#039;': "'",
  '&quot;': '"',
}

function decodeString(str) {
  return str.replace(/&#?\w+;/g, match => entities[match]);
}

// eslint-disable-next-line no-unused-vars
const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'What is 3 + 3 ?',
    answer: '4',
    options: ['2', '3', '5', '4']
  },
  {
    id: 2,
    question: 'What is four + four ?',
    answer: '8',
    options: ['2', '3', '8', '4']
  },
  {
    id: 3,
    question: 'What is six * six ?',
    answer: '36',
    options: ['2', '36', '5', '4']
  }
]
export default App;
