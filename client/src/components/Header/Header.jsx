import Logo from "@/assets/Logo.png"

export default function Header ({ active, setActive }) {
    const changeMenu = (e) => {
        setActive(e.target.innerHTML)
    }

    return (
        <header className="flex justify-center pt-10">
            <img src={ Logo } alt="" className="w-28"/>
            <nav className="pl-15 flex items-center">
                <button onClick={changeMenu} className={active === "Home" ? "navButton-active" : "navButton"} >Home</button>
                <button onClick={changeMenu} className={active !== "Home" ? "navButton-active" : "navButton"} href="#">Friends</button>
            </nav>
            <a href="#" className="bg-darkOne text-white text-center pt-1 text-lg ml-8 w-24 h-10 rounded-xl self-center hover:bg-lightOne">Logout</a>
        </header>
    )
};