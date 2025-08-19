import Card from './Card'
import deleteCard from "@/assets/delete-card.svg"

const List = () => {
    return (
        <div className="bg-lightDarkOne w-2/5 h-120 ml-4 flex-shrink-0">
            <div className='border-b-white border-b-2 flex justify-between py-2 px-4'>
                <h2 className='text-lg'>List Title</h2>
                <img className="cursor-pointer hover:w-6.5" src={deleteCard} alt="" />
            </div>
            <div className='px-2 max-h-4/5 overflow-y-auto'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="flex justify-center mt-2 mb-2">
                <a href="#" className="inline-block bg-white text-darkOne px-2 py-1 rounded-md font-semibold">ADD</a>
            </div>
        </div>
    )
}

export default List