import Logo from "@/assets/Logo.png"
import NavButton from "./NavButton"

export default function Header () {
    return (
        <header className="flex justify-center pt-10">
            <img src={ Logo } alt="" className="w-28"/>
            <nav className="pl-15 flex items-center">
                <NavButton linkInfo = {{
                    name: "Home",
                    href: "#"
                }}></NavButton>
                <NavButton linkInfo = {{
                    name: "Friends",
                    href: "#"
                }}></NavButton>
                <NavButton linkInfo = {{
                    name: "Logout",
                    href: "#"
                }}></NavButton>
            </nav>
        </header>
    )
};