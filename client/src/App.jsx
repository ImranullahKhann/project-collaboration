import "./main.css"
import Header from "./components/Header/Header"
import Boards from "./components/Boards/Boards"
import Lists from "./components/Tasks/Lists"

const App = () => {
    return (
        <>
            <Header />
            <main className="flex justify-around mt-12">
                <Boards />
                <Lists />
            </main>
        </>
    )
}

export default App