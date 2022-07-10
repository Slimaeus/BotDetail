import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
export const NavBarContainer = (props) => {
    const [tabs, setTabs] = useState([
        {
            name: "Features",
            link: "features"
        },
        {
            name: "Commands",
            link: "commands"
        },
        {
            name: "Vote",
            link: "vote"
        },
        {
            name: "Uptime",
            link: "uptime"
        },
        {
            name: "Support",
            link: "support"
        },
        {
            name: "Invite",
            link: "invite"
        },
    ])
    const [clickedMenu, setClickedMenu] = useState(false)
    const handleClick = (e) => {
        setClickedMenu(prev => !prev)
    }
    const handleHover = (e) => {
        setTabs([...tabs, { name: "o_O", link: "secret"}])
    }
    const handleOut = (e) => {
        setTabs(tabs.filter(e => e.link !== "secret" ))
    }
    return (

        <NavBar tabs={tabs} onClick={handleClick} clicked={clickedMenu} onHover={handleHover} onOut={handleOut} />
    )
}