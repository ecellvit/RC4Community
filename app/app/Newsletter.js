"use client"
import React from 'react'

function Newsletter() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="bg-black ">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:border-t-0 sm:border-t-2 sm:border-gray-800 mt-2" >
                <div className="mx-auto max-w-screen-md sm:text-center flex flex-col items-center justify-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">Sign up for our newsletter</h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xl text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <button className="text-center w-full relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                                <span className="flex items-center space-x-5">
                                    <span className="text-gray-100" onClick={() => openInNewTab("https://thatdevopsguy.substack.com")} >Subscribe &rarr;</span>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}

export default Newsletter