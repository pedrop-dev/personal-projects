"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession , getProviders} from 'next-auth/react'

export default function Nav() {
    const isUserLogged = true

    return (
        <nav className='h-14 bg-bg flex justify-between items-center px-6 md:px-20'>
            <section className='logo'>
                <h1 className='text-white'>
                    Logo
                </h1>
            </section>

            {/* Navigation */}
            <section className='flex'>
                {isUserLogged ? (
                    <div className='flex justify-between items-center gap-5'>
                        <p className='text-d-white text-sm'>
                            You are logged in
                        </p>   

                        <button className='button-config'>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <>
                        {
                            (
                                <div className='flex gap-5'>
                                    <button className='button-config'>
                                        Sign Up
                                    </button>

                                    <button className='button-config'>
                                        Sign In
                                    </button>
                                </div>
                            )
                        }
                    </>
                )}
            </section>
        </nav>
    )
}