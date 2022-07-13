import React, { useState } from "react";
import { Card } from "../components/Card";

export const CardContainer = (props) => {
    const [bodyStates, setBodyStates] = useState([
        {
            name: 'Stats',
            value: 'stat'
        },
        {
            name: 'Details',
            value: 'detail'
        }
    ])
    const [bodyState, setBodyState] = useState('stat')
    const handleBodyChange = (state) => {
        setBodyState(state)
    }
    return (

        <Card card={props.card} index={props.index} onBodyChange={handleBodyChange} bodyStates={bodyStates} currentState={bodyState} />
    )
}
CardContainer.propTypes = {
    bodyStates: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired
    ).isRequired
}