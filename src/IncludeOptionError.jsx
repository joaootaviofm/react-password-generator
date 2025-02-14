import { useState } from 'react'


export default function IncludeOptionError(){

    const [showDiv, setShowDiv] = useState(true)

    if(!showDiv) return null;

    return(
        <>
            <div className="text-green-400 border-teal-900 border-dashed bg-black border-2 text-center w-96 p-10 fixed top-10 left-1/2 -translate-x-1/2">
                <p>You have to include at least one type</p>
                <button onClick={() => setShowDiv(false)} className="cursor-pointer bg-green-400 text-white font-bold w-[120px] rounded mt-5 hover:opacity-80 transition-opacity duration-75">Ok</button>
            </div>
        </>
    )
}