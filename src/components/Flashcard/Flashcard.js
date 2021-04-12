import React, { useState } from 'react'
import classes from "./Flashcard.module.css"

const Flashcard = (props) => {
    const [flip, setFlip] = useState(false);

    const f = flip ? 'card ' : 'card flip';
    //<div className={[classes.card, classes[f]].join(",")}
    console.log("f is " + f);
    return (
        <div className={[classes.card, flip ? classes.flip : ''].join(' ')}
            onClick={() => setFlip(!flip)}>
            <div className={classes.front}>
                {props.flashcard.question}
                <div className={classes['flashcard-options']}>
                    {props.flashcard.options.map(o => {
                        return <div className={classes['flashcard-option']}>{o}</div>
                    })}
                </div>
            </div>
            <div className={classes.back}>{props.flashcard.answer}</div>
        </div >
    )
}


export default Flashcard;