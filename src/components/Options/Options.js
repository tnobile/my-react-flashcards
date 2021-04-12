import React from 'react'
import classes from './Options.module.css'

const Options = (props) => {
    return (
        <div className={classes['flashcard-options']}>
            {props.options.map((o, i) => {
                return <div id={`${props.id}-${i}`} className={classes['flashcard-option']}>{o}</div>
            })}
        </div>
    )
}

export default Options;