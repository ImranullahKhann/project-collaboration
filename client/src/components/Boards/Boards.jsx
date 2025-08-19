import Board from "./Board"

const Boards = () => {
    return (
        <div className="bg-darkOne text-white h-145 w-80 rounded-2xl">
            <h1 className="text-lg font-bold ml-4 my-2">Boards</h1>
            <nav className="mb-2">
                <a href="#" className="inline-block w-2/4 text-center text-lg font-medium border-white border-2 py-1 border-x-0 hover:bg-white hover:text-darkOne">Owned</a>
                <a href="#" className="inline-block w-2/4 text-center text-lg font-medium border-white border-2 py-1 border-x-0 hover:bg-white hover:text-darkOne">Member Of</a>
            </nav>
            <div className="h-3/4 overflow-y-auto px-2">
                {/* Render All Boards */}
                <Board boardInfo={{
                    title: "Board 1",
                    desc: "this is desc"
                }}/>
                <Board boardInfo={{
                    title: "Board #",
                    desc: "this is desc"
                }}/>
                <Board boardInfo={{
                    title: "Board #",
                    desc: "this is desc"
                }}/>
                <Board boardInfo={{
                    title: "Board #",
                    desc: "this is desc"
                }}/>
                <Board boardInfo={{
                    title: "Board #",
                    desc: "this is desc"
                }}/>
                <Board boardInfo={{
                    title: "Board #",
                    desc: "this is desc"
                }}/>
            </div>
            <div className="flex justify-center mt-2">
                <a href="#" className="inline-block bg-lightTwo text-darkOne px-3 py-1.5 rounded-md font-semibold">CREATE</a>
            </div>
        </div>
    )
}

export default Boards