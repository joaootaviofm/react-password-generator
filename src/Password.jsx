export default function Password(){
    return(
        <div className="">
            <h1 className="text-center font-bold text-white text-[2rem] mb-5">Password Generator</h1>
            <div className="flex flex-col gap-3 text-white bg-teal-900 rounded p-10">
                <div className="flex gap-10 items-center hover:opacity-50 transition-opacity duration-500 ">
                    <label className="flex-1" htmlFor="passwordLength">Password length</label>
                    <input type="number" id="passwordLength" className="bg-white rounded text-black"/>
                </div>
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500" >
                    <label className="flex-1" htmlFor="includeUppercase">Include uppercase letters</label>
                    <input type="checkbox" id="includeUppercase" />
                </div>      
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500">
                    <label className="flex-1" htmlFor="includeLowercase">Include lowercase letters</label>
                    <input type="checkbox" id="includeLowercase" />
                </div>            
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500">
                    <label className="flex-1" htmlFor="includeNumber">Include numbers</label>
                    <input type="checkbox" id="includeNumber" />
                </div>  
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500">
                    <label className="flex-1" htmlFor="includeSymbols">Include symbols</label>
                    <input type="checkbox" id="includeSymbols" />
                </div>  
            </div>
        </div>
    )
}