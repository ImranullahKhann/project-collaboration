import Header from "./Header/Header"
import Friends from "./Friends"
import Home from "./Home" 
import { useState } from "react"


const Dashboard = () => {
    const [ menu, setMenu ] = useState("Home")

    return (
        <>
            <Header active={menu} setActive={setMenu} />
            { menu === "Home" ? (
                <Home />    
            ) : (
                <Friends />
            ) }
        </>
    )
}

export default Dashboard