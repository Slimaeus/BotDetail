import React, { useState } from 'react'
import '../styles/CardList.module.css'
import clsx from 'clsx';
import { Card } from './Card';
import { CardContainer } from '../containers/CardContainer';
export const CardList = (props) => {
    return (
        <div className='card-group'>
            {props.cards.map((card, index) => {
                return (

                    <CardContainer index={index} card={card} />
                )
            })}
        </div>
    )
}