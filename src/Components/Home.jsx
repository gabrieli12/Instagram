import React from 'react'
import { MdHomeFilled } from "react-icons/md";

function Home() {
  return (
    <section>
        <aside className='h-screen border-r inline-block border-[#dadada] px-[20px] py-[20px] pr-[90px]'>
            <div>
                <h1 className='danceingScript font-black text-[2em]'>Intagram</h1>
            </div>
            <div className='flex flex-col gap-3'>
                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>

                <button className='flex items-center justify-center gap-1 text-[1.2em]'>
                    <MdHomeFilled />
                    <p className='font-medium text-[1.1em]'>Home</p>
                </button>
            </div>
        </aside>
    </section>
  )
}

export default Home