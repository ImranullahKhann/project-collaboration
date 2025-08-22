import logo from "@/assets/Logo.png"
import { useState } from "react"
import Login from "./Login"
import Register from "./Register"

export default function Auth () {
    const [inLogin, setInLogin] = useState(true)
    const changeMenu = (e) => {
        if (e.target.innerHTML === "Login")
            setInLogin(true)
        else
            setInLogin(false)
    }


    return (
        <>
            <header>
                <img className="w-28 mt-8 ml-48" src={logo} alt="" />
            </header>
            <main className="bg-darkOne w-150 h-125 m-auto mt-10 rounded-2xl">
                <nav>
                    <button className = {inLogin ?"authNavButton-active" + " rounded-tl-2xl" : "authNavButton" + " rounded-tl-2xl"} onClick={changeMenu}>Login</button>
                    <button className={!inLogin ?"authNavButton-active" + " rounded-tr-2xl" : "authNavButton" + " rounded-tr-2xl"} onClick={changeMenu}>Register</button>
                </nav>
                {inLogin ? (
                    <Login />
                ) : (
                    <Register />
                )}
            </main>
        </>
    )
} 