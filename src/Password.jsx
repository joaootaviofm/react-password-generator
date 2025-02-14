import { useState } from 'react'

export default function Password(){
    
    const [passwordLength, setPasswordLength] = useState(0)
    const [includeUpperCase, setIncludeUpperCase] = useState(false)
    const [includeLowerCase, setIncludeLowerCase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const [passwordInput, setPasswordInput] = useState("Password")

    const UpperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const LowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm"
    const symbols = "!@#$%^&*()_+"
    const numbers = "0123456789"

    let password = ""
    function generatePassword(){
        let generatedString = ""

        if(!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols){
            return setPasswordInput("Include at least one option!")
        }
        if(passwordLength == 0){
            return setPasswordInput("Input the password length")
        }
        if(passwordLength < 7){
            return setPasswordInput("Password is too short!")
        }
        else if(passwordLength > 20){
            return setPasswordInput("Password must be shorter!")
        }

        includeUpperCase ? generatedString += UpperCaseLetters : generatedString += "";
        includeLowerCase ? generatedString += LowerCaseLetters : generatedString += "";
        includeSymbols ? generatedString += symbols : generatedString += "";
        includeNumbers ? generatedString += numbers : generatedString += "";

        while(password.length < passwordLength){
            let index = Math.floor(Math.random() * generatedString.length)
            password += generatedString[index]
        }
        setPasswordInput(password)
    }

    function handlePasswordLength(event){
        setPasswordLength(Number(event.target.value))
     }

    function handleIncludeUpperCase(event){
        if(event.target.checked){
            setIncludeUpperCase(event.target.checked)
        }else{
            setIncludeUpperCase(false)
        }
     }

    function handleIncludeLowerCase(event){
        if(event.target.checked){
            setIncludeLowerCase(event.target.checked)
        }
        else{
            setIncludeLowerCase(false)
        }
     }

    function handleIncludeNumbers(event){
        if(event.target.checked){
            setIncludeNumbers(event.target.checked)
        }
        else{
            setIncludeNumbers(false)
        }
     }
     
    function handleIncludeSymbols(event){
        if(event.target.checked){
            setIncludeSymbols(event.target.checked)
        }
        else{
            setIncludeSymbols(false)
        }
     }

    function copyToClipboard(){
        navigator.clipboard.writeText(passwordInput)
        alert(passwordInput)
        // not done
    }

    return(
        <div>
            <h1 className="text-center font-bold text-white text-[2rem] mb-5">Password Generator</h1>
            <div className="flex flex-col gap-3 text-white bg-teal-900 rounded p-10 shadow-md shadow-black">
                <div onClick={copyToClipboard} className='flex flex-row items-center relative justify-center'>
                    <input className= 'w-full p-2 text-[14px] bg-white text-black rounded outline-0 text-center' placeholder={passwordInput} type="text" readOnly/>
                    <img className='cursor-pointer absolute right-0 h-8 w-8 ' src="./assets/copy.svg" alt="" />
                </div>
                <div className="flex gap-10 items-center hover:opacity-50 transition-opacity duration-500 ">
                    <label className="flex-1" htmlFor="passwordLength">Password length</label>
                    <input onChange={handlePasswordLength} max={20} min={7} type="number" id="passwordLength" className="bg-white rounded text-black outline-0 border-1 text-center border-black"/>
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