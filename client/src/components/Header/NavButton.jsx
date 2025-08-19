export default function NavButton ({ linkInfo }) {
    return (
        <a href={linkInfo.href} className="bg-darkOne text-white inline-block w-30 h-12 text-center text-lg pt-2.5 hover:bg-lightOne">{linkInfo.name}</a>
    )
}