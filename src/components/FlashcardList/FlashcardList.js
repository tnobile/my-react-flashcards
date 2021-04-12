import React from 'react'
import Flashcard from '../Flashcard/Flashcard'
import classes from './FlashcardList.module.css'


const FlashcardList = (props) => {
    return (
        <div className={classes["card-grid"]}>
            {props.flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    );
}

export default FlashcardList;