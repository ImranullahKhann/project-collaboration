import FriendCard from "./FriendCard"

const Friends = () => {
    const friends = [
        {
            id: 1,
            name: "franklin",
            friendsId: "XXXXXXXXXXXX"
        },
        {
            id: 2,
            name: "abdullah",
            friendsId: "XXXXXXXXXXXX"
        },
        {
            id: 3,
            name: "johan",
            friendsId: "XXXXXXXXXXXX"
        },
        {
            id: 4,
            name: "ali",
            friendsId: "XXXXXXXXXXXX"
        },
    ]
    return (
        <main className="flex flex-col items-center mt-10 px-10">
            <section className="flex justify-between w-full bg-darkOne text-white p-3 rounded-md">
                <h1 className="text-2xl">Username</h1>
                <h2 className="text-lg">ID: XXXXXXXXXXXX</h2>
            </section>
           
            <section className="mt-10 bg-darkOne text-white w-180 h-125 rounded-md p-3 flex flex-col items-center">
                <h2 className="py-3 text-xl">Friends</h2>
                <form className="w-full py-5 flex justify-around" action="">
                    <input className="outline-none border-1 border-white w-8/11 py-1 px-2" type="text" placeholder="Enter User ID" />
                    <button className="bg-lightOne py-1.5 px-2 cursor-pointer hover:bg-[#9da3e0]">Send Friend Request</button>
                </form>
                <div className="w-full">
                    {
                    friends.map(friend => <FriendCard key={friend.id} info={friend} />)
                    }
                </div>
            </section>
        </main>
    )
}

export default Friends