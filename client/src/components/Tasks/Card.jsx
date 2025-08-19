import slider from "@/assets/slider.svg"

export default function Card () {
    return (
        <div className="border-white border-2 mt-2 p-2 relative cursor-pointer">
            <h3 className="font-bold">This is some Task</h3>
            <h3 className="italic">Due Date: 31/08/25</h3>
            <h3>Assigned to: Mana</h3>
            <img className="w-7 absolute top-10 right-3 hover:w-7.5" src={slider} alt="" />
        </div>    
    )
}