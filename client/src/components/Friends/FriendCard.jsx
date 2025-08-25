const FriendCard = ({ info }) => {
    return (
        <div className="border-2 border-white mb-3 py-2 px-3">
            <div className="flex justify-between">
                <h3 className="text-lg">{info.name}</h3>
                <button className="py-1 px-2 rounded-lg hover:bg-dangerRed cursor-pointer">Remove</button>
            </div>
            <p className="font-light">{info.friendsId}</p>
            
        </div>
    )
}

export default FriendCard