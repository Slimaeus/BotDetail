import React, { useState} from "react";
import { CardList } from "../components/CardList";
export const CardListContainer = (props) => {
    const [cards, setCards] = useState([
        {
            name: "Dragon",
            hp: 100,
            mp: 100,
            atk: 100,
            def: 100,
            spd: 100
        },
        {
            name: "Spider",
            hp: 100,
            mp: 100,
            atk: 100,
            def: 100,
            spd: 100
        }
    ])
    return (
        <CardList cards={cards}/>
    )
}