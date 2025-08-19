import List from "./List"

export default function Lists () {
    return (
        <div className="bg-darkTwo text-white h-145 w-3/5 rounded-2xl rounded-b-none ">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold ml-4 my-2">Board 1</h1>
                <div className="my-2 mr-4">
                    <a href="#" className="inline-block bg-lightTwo text-darkOne font-semibold p-2 rounded-md mr-4">Members</a>
                    <a href="#" className="inline-block bg-dangerRed text-white font-bold p-2 rounded-md">DELETE</a>
                </div>
            </div>
            <div className="flex flex-row mt-5 w-full overflow-x-auto h-130">
                <List />
                <List />
                <List />
                <div className="flex items-center">
                    <a className="inline-block w-35 mx-4 py-1 rounded-md bg-lightTwo text-darkOne font-semibold text-center" href="#">ADD NEW LIST</a>
                </div>
            </div>
        </div>
    )
}