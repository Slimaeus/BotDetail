import React from 'react'
import clsx from 'clsx'
export const Card = (props) => {
    const card = props.card
    const handleStateClicked = (state) => {
        props.onBodyChange(state)
    }
    return (
            <div className='card text-center col-3 m-5' key={`${card.name.toLowerCase()}-${props.index}`} >

                <div className='card-header'>
                    <div className='row'>
                        <div>[SSR]</div>
                        <h5>{card.name}</h5>
                    </div>
                    <ul className="nav nav-tabs card-header-tabs">
                        {props.bodyStates.map((state) => {
                            const isActive = state.value == props.currentState
                            return (
                                <li className="nav-item" onClick={() => handleStateClicked(state.value)}>
                                    <a className={clsx("nav-link", {
                                        "active": isActive,
                                        "disabled": !isActive
                                    })} href="#">{state.name}</a>
                                </li>
                            )
                        })}
                        {/* <li className="nav-item" onClick={props.handleStatClicked}>
                            <a className={clsx("nav-link", {
                                "disabled": !isClicked,
                                "active": isClicked
                            })} href="#">Stats</a>
                        </li>
                        <li className="nav-item" onClick={() => setIsClicked(false)}>
                            <a className={clsx("nav-link", {
                                "active": !isClicked,
                                "disabled": isClicked
                            })} href="#">Details</a>
                        </li> */}
                    </ul>
                </div>
                <div className='card-title'>[Legend creature]</div>
                <div className='card-body'>
                    {props.currentState}
                </div>
            </div>
    )
}