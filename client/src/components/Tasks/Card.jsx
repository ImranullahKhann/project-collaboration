import slider from "@/assets/slider.svg"
import { useDraggable } from "@dnd-kit/core";

export default function Card ({ info }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
            id: info.id,
        });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        position: "absolute",
    } : undefined

    return (
        <div ref={ setNodeRef } style={style}className="border-white border-2 mt-2 p-2 w-69 relative cursor-pointer hover:bg-darkOne" >
            <h3 className="font-bold">{info.title}</h3>
            <h3 className="italic">Due Date: 31/08/25</h3>
            <h3>Assigned to: Mana</h3>
            <img className="w-7 absolute top-10 right-3 hover:w-7.5" src={slider} {...attributes} {...listeners} alt="" />
        </div>    
    )
}