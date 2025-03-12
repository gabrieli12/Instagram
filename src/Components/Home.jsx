import React from 'react'
import Asidemenu from './Asidemenu';
import { useContext } from 'react';
import { Mycontext } from '../MyContext';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState, useEffect } from 'react';
import Mainposts from './Mainposts';


function Home() {

    const { userInfo, currentLogAcc, setCurrentLogAcc } = useContext(Mycontext)

    const [transform, setTransform] = useState(0)

    

    //
    console.log(currentLogAcc)


    // useEffect(() => {

    //     if (transform < 5) {
    //         setTransform(0)
    //         setIsLeft(true)
    //     } else {
    //         setIsLeft(false)
    //     }
    // }, [transform])

    return (
        <section>
            <Asidemenu />
            <div className='gio z-0 flex'>
                <div className=' flex justify-center items-start gap-20 pt-[20px] w-[86.8%] '>
                <Mainposts/>
                    <div className='w-[319px] h-[546] max-[1346px]:hidden '>
                        <div className='  flex flex-row-reverse items-center justify-between  '>
                            <div className='pl-5  flex flex-row-reverse items-center gap-2'>
                                <img className=' rounded-full border border-[#ffffff] ' width={50} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <div className='flex flex-col items-end justify-center'>
                                    <p className='font-medium text-[0.9em]'>{userInfo[currentLogAcc]?.username}</p>
                                    <p className='text-[grey] text-[0.9em]'>{userInfo[currentLogAcc]?.fullname}</p>
                                </div>
                            </div>
                            <div className=''>
                                <button className='text-[#0093f5] font-medium text-[0.8em]'>Switch</button>
                            </div>
                        </div>

                        <div className='pl-5  mt-[20px] flex flex-col gap-3 '>
                            <div className='flex justify-between items-center'>
                                <p className='text-[0.8em]  font-medium'>See All</p>
                                <p className='text-[#8f8f8f] text-[0.8em] font-medium'>Suggested for you</p>
                            </div>

                            {
                                Object.entries(userInfo).slice(0, 5).map(([key, user]) => {
                                    console.log(user)
                                    return (
                                        <div className='  flex flex-row-reverse items-center justify-between  '>
                                            <div className='flex flex-row-reverse items-center gap-2'>
                                                <img className=' rounded-full border border-[#ffffff] ' width={50} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                                <div className='flex flex-col items-end justify-center'>
                                                    <p className='font-medium text-[0.9em]'>{user.username}</p>
                                                    <p className='text-[#8f8f8f] text-[0.8em] '>Suggested for you</p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <button className='text-[#0093f5] font-medium text-[0.8em]'>Follow</button>
                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>

                        <div className='flex flex-col items-end mt-[30px]'>
                            <div>
                                <a className='text-[0.8em] text-[#c7c7c7]' href="https://about.instagram.com">About · </a>
                                <a className='text-[0.8em] text-[#c7c7c7]' href="https://help.instagram.com">Help · </a>
                                <a className='text-[0.8em] text-[#c7c7c7]' href="https://about.instagram.com/blog">press · </a>
                                <a className='text-[0.8em] text-[#c7c7c7]' href="https://developers.facebook.com/docs/instagram-platform">API · </a>
                                <a className='text-[0.8em] text-[#c7c7c7]' href="https://about.instagram.com/about-us/careers">Jobs · </a>
                                <a className='text-[0.8em] text-[#c7c7c7]' href="https://help.instagram.com/581066165581870/">Terms</a>
                            </div>
                            <div>
                            <a className='text-[0.8em] text-[#c7c7c7]' href="https://www.instagram.com/explore/locations/">Location · </a>
                            <a className='text-[0.8em] text-[#c7c7c7]' href="https://www.instagram.com/language/preferences/">Language · </a>
                            <a className='text-[0.8em] text-[#c7c7c7]' href="https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer">Meta Verified</a>
                            </div>

                            <div className='flex flex-row-reverse gap-1 text-[0.8em] text-[#c7c7c7] mt-[15px]'>
                                <p> 2025 ©</p>
                                <p className=''>INSTAGRAM FROM META </p>
                            </div>
                        </div>
                    </div>

                    <div className='gio2 overflow-x-hidden relative z-0 w-[630px]  '>
                        <div className={`${Object.keys(userInfo).length <= 8 ? "hidden" : "absolute"} absolute top-0 right-0 z-10`} onClick={() => {
                            setTransform(transform - 50)
                            console.log(Object.keys(userInfo).length)

                        }}>
                            <IoIosArrowDroprightCircle />
                        </div>

                        <div className={`${transform == 0 ? "hidden" : "absolute"} absolute left-0 z-1`} onClick={() => {
                            setTransform(transform + 50)

                        }}>
                            <IoIosArrowDropleftCircle />
                        </div>


                        <div style={{ transform: `translateX(${transform}px` }} className={` flex items-center justify-center gap-5 duration-500 ${Object.keys(userInfo).length <= 8 ? "w-full" : "w-[700px]"}`}>
                            {
                                Object.entries(userInfo).map(([key, user]) => {
                                    console.log(user)
                                    return (
                                        <div className='flex flex-col items-center justify-center' key={key}>
                                            <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                            <p className=' text-[.7em] text-center mt-[5px]'>{user.username}</p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home