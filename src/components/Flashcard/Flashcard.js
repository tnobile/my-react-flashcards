import React, { useState } from 'react'
import classes from "./Flashcard.module.css"
import Options from "../Options/Options"

const Flashcard = (props) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className={[classes.card, flip ? classes.flip : ''].join(' ')}
            onClick={() => setFlip(!flip)}>
            <div className={classes.front}>
                {props.flashcard.question}
                <Options options={props.flashcard.options} id={props.flashcard.id}/> 
            </div>
            <div className={classes.back}>{props.flashcard.answer}</div>
        </div >
    )
}

export default Flashcard;