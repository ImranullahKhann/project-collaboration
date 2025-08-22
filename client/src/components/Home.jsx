import Boards from "./Boards/Boards"
import Lists from "./Tasks/Lists"

export default function Home () {
    return (
        <main className="flex justify-around mt-12 min-w-7xl">
            <Boards />
            <Lists />
        </main>
    )
}

