const Board = ({ boardInfo }) => {
    return (
        <div className="p-4 border-lightTwo border-2  text-lightTwo mb-2 cursor-pointer hover:bg-lightTwo hover:text-darkOne" >
            <h2 className="font-bold">{ boardInfo.title }</h2>
            <h3>{ boardInfo.desc }</h3>
        </div>
    )
}

export default Board