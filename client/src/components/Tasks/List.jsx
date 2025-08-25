import Card from './Card'
import deleteCard from "@/assets/delete-card.svg"
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'

const List = ({ info }) => {
    function handleDragEnd(event) {
        const {over} = event;

        console.log(over ? over.id : null);
    }

    const cards = [
        {
            id: 0,
            title: "This is task 1"
        },
        {
            id: 1,
            title: "This is task 2"
        },
        {
            id: 3,
            title: "This is task 3"
        },
        {
            id: 4,
            title: "This is task 4"
        },
    ]

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: info.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, 0px, 0)`,
    } : undefined

    const {isOver, setNodeRef2} = useDroppable({
        id: "cards"
    })

    const style2 = {
        backgroundColor: isOver ? 'green' : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} className="bg-lightDarkOne w-2/5 h-120 ml-4 flex-shrink-0">
            <div  className='border-b-white border-b-2 flex justify-between py-2 px-4 cursor-pointer' {...listeners} {...attributes}>
                <h2 className='text-lg'>{ info.title }</h2>
                <img className="cursor-pointer hover:w-6.5" src={deleteCard} alt="" />
            </div>
            <DndContext  onDragEnd={handleDragEnd}>
            <div ref={setNodeRef2} className='px-2 h-4/5 overflow-y-auto' style={style2}>
                { cards.map(card => <Card key={card.id} info={card} />) }
            </div>
            </DndContext>
            <div className="flex justify-center mt-2 mb-2">
                <a href="#" className="inline-block bg-white text-darkOne px-2 py-1 rounded-md font-semibold">ADD</a>
            </div>
        </div>
    )
}

export default List