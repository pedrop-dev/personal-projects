'use client'

import { BiSolidLockAlt } from "react-icons/bi"
import { IoMail } from "react-icons/io5"



export default function Signup() {
    return (
        <>
            
            <main className="h-screen w-full bg-bg pt-24">
                <h1 className="text-5xl text-center font-semibold font-sans text-white">
                    Create your account
                </h1>

                
                <form className="w-full flex flex-col items-center gap-8 pt-24">
                    <div className="w-full flex flex-row items-center justify-center">

                        <IoMail className="h-14 pl-2 pr-1 text-4xl bg-bg text-d-white border-solid border-t-2 border-l-2 border-b-2 border-d-white rounded-sm " />

                        <input 
                            type="text" 
                            placeholder="Email"
                            className="h-14 w-8/12 pl-4 text-d-white  outline-none bg-bg border-solid border-t-2 border-r-2 border-b-2 border-d-white rounded-sm"
                        />
                    </div>

                    <div className="w-full flex flex-row items-center justify-center">

                        <BiSolidLockAlt className="h-14 pl-2 pr-1 text-4xl bg-bg text-d-white border-solid border-t-2 border-l-2 border-b-2 border-d-white rounded-sm " />

                        <input 
                            type="password" 
                            placeholder="Password"
                            className="h-14 w-8/12 pl-4 text-d-white outline-none bg-bg border-solid border-t-2 border-r-2 border-b-2 border-d-white rounded-sm"
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="h-14 w-9/12 text-d-white border-solid border-2 border-d-white rounded-sm"
                    >
                        Sign Up
                    </button>
                </form>
            </main>
        </>
    )
}