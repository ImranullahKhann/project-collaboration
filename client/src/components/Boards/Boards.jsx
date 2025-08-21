import Board from "./Board"
import { useState } from "react"

const Boards = () => {
    const [boardsView, setBoardsView] = useState("Owned")
    const boards = [
        {
            title : "Board 1",
            desc : "This is a board",
            active: true
        },
        {
            title : "Board 1",
            desc : "This is a board",
            active: false
        },
        {
            title : "Board 1",
            desc : "This is a board",
            active: false
        },
        {
            title : "Board 1",
            desc : "This is a board",
            active: false
        },
    ]

    return (
        <div className="bg-darkOne text-white h-145 w-80 rounded-2xl flex-shrink-0">
            <h1 className="text-lg font-bold ml-4 my-2">Boards</h1>
            <nav className="mb-2">
                <a href="#" className={boardsView === "Owned" ? "boardsNavActive" : "boardsNavInactive"}>Owned</a>
                <a href="#" className={boardsView !== "Owned" ? "boardsNavActive" : "boardsNavInactive"}>Member Of</a>
            </nav>
            <div className="h-3/4 overflow-y-auto px-2">
                {/* Render All Boards */}
                {boards.map(board => (
                    <Board boardInfo={board} />
                ))}
            </div>
            <div className="flex justify-center mt-2">
                <a href="#" className="inline-block bg-lightTwo text-darkOne px-3 py-1.5 rounded-md font-semibold">CREATE</a>
            </div>
        </div>
    )
}

export default Boards