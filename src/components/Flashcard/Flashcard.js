import React, { useState } from 'react'

const Flashcard = (props) => {
    const [flip, setFlip] = useState(false);

    return (
        <div onClick={() => setFlip(!flip)}>
            { flip ? props.flashcard.answer : props.flashcard.question}
        </div>
    )
}


export default Flashcard;