import Header from "./Header/Header"
import Boards from "./Boards/Boards"
import Lists from "./Tasks/Lists"

const Dashboard = () => {
    return (
        <>
            <Header />
            <main className="flex justify-around mt-12 min-w-7xl">
                <Boards />
                <Lists />
            </main>
        </>
    )
}

export default Dashboard