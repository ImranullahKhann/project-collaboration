const Board = ({ boardInfo }) => {
    return (
        <div className={boardInfo.active ? "boardActive" : "boardInactive"} >
            <h2 className="font-bold">{ boardInfo.title }</h2>
            <h3>{ boardInfo.desc }</h3>
        </div>
    )
}

export default Board