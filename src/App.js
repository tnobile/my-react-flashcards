import React, { useState } from "react";
import FlashcardList from './components/Flashcard/FlashcardList';

function App() {
  const [cards, setCards] = useState(SAMPLE_CARDS)
  return (
    <div>
      <h1>hello switzerland</h1>
      <FlashcardList flashcards={cards} />
    </div>
  );
}

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
    id: 1,
    question: 'What is six * six ?',
    answer: '36',
    options: ['2', '36', '5', '4']
  }
]
export default App;
