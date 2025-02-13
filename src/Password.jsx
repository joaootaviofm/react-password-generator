import { useState } from 'react'

export default function Password(){
    
    const [passwordLength, setPasswordLength] = useState()
    const [includeUpperCase, setIncludeUpperCase] = useState(false)
    const [includeLowerCase, setIncludeLowerCase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)

    function generatePassword(){
        alert(passwordLength)
    }

     function handlePasswordLength(event){
        setPasswordLength(event.target.value)
     }

     function handleIncludeUpperCase(event){
        if(event.target.checked){
            setIncludeUpperCase(true)
        }
     }

     function handleIncludeLowerCase(event){
        if(event.target.checked){
            setIncludeLowerCase(true)
        }
     }
     
     function handleIncludeLowerCase(event){
        if(event.target.checked){
            setIncludeLowerCase(true)
        }
     }

     function handleIncludeNumbers(event){
        if(event.target.checked){
            setIncludeNumbers(true)
        }
     }
     
     function handleIncludeSymbols(event){
        if(event.target.checked){
            setIncludeSymbols(true)
        }
     }

    return(
        <div>
            <h1 className="text-center font-bold text-white text-[2rem] mb-5">Password Generator</h1>
            <div className="flex flex-col gap-3 text-white bg-teal-900 rounded p-10 shadow-md shadow-black">
                <input className='bg-white text-black rounded outline-0 text-center' placeholder='Your password' type="text" readOnly/>
                <div className="flex gap-10 items-center hover:opacity-50 transition-opacity duration-500 ">
                    <label className="flex-1" htmlFor="passwordLength">Password length</label>
                    <input onChange={handlePasswordLength} placeholder="Password length" type="number" id="passwordLength" className="bg-white rounded text-black outline-0 border-1 text-center border-black"/>
                </div>
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500" >
                    <label className="flex-1" htmlFor="includeUppercase">Include uppercase letters</label>
                    <input onChange={handleIncludeUpperCase} type="checkbox" id="includeUppercase" />
                </div>      
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500">
                    <label className="flex-1" htmlFor="includeLowercase">Include lowercase letters</label>
                    <input onChange={handleIncludeLowerCase} type="checkbox" id="includeLowercase" />
                </div>            
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500">
                    <label className="flex-1" htmlFor="includeNumber">Include numbers</label>
                    <input onChange={handleIncludeNumbers} type="checkbox" id="includeNumber" />
                </div>  
                <div className="flex items-center hover:opacity-50 transition-opacity duration-500">
                    <label className="flex-1" htmlFor="includeSymbols">Include symbols</label>
                    <input onChange={handleIncludeSymbols}type="checkbox" id="includeSymbols"/>
                </div>  
                <button onClick={generatePassword} className="bg-slate-900 rounded p-1 cursor-pointer hover:opacity-85 transition-opacity duration-500">Generate password</button>
            </div>
        </div>
    )
}