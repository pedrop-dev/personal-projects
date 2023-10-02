import Link from 'next/link'

export default function Home() {
    const isUserLogged = false
    
    return (
        <main className="flex flex-col items-center h-screen w-full bg-bg pt-24">
            <div>
                <h1 className="text-5xl text-center font-semibold font-sans text-white">
                    Discover
                </h1>
                <p className="text-d-white text-center pt-5">
                    Step into our vibrant online community! Explore, learn, and connect with us on this exciting digital journey ahead.
                </p>
            </div>

            <section className="w-7/12 grid justify-center gap-5 pt-20 lg:grid-cols-2 lg:justify-items-center lg:gap-10">
                <button className="big-button-config">
                    Explore
                </button>

                <button className="big-button-config">
                    Branding
                </button>
                <button className="big-button-config">
                    Social
                </button>

                <button className="big-button-config">
                    Blog
                </button>
                {
                    isUserLogged ? (
                        <>
                        <button className="big-button-config">
                            Connect
                        </button>

                        <button className="big-button-config">
                            Support 
                        </button>
                    </>
                    ) : (
                        <>
                            <Link href="/signup">
                                <button className="big-button-config">
                                    Sign Up
                                </button>
                            </Link>

                            <Link href="/signin">
                                <button className="big-button-config">
                                    Sign In
                                </button>
                            </Link>
                            
                        </>
                    )
                }
            </section>
        </main>
    )
}
