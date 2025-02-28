import React from 'react'
import Asidemenu from './Asidemenu';
import { useContext } from 'react';
import { Mycontext } from '../Mycontext';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState, useEffect } from 'react';

function Home() {

    const { userInfo,currentLogAcc , setCurrentLogAcc } = useContext(Mycontext)
    
    const [transform, setTransform] = useState(0)
    const [isRight, setIsRight] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    //
    console.log(currentLogAcc)


    useEffect(() => {

        if (transform < 5) {
            setTransform(0)
            setIsLeft(true)
        } else {
            setIsLeft(false)
        }
    }, [transform])

    return (
        <section>
            <Asidemenu />
            <div className='gio z-0 flex'>
                <div className=' flex justify-center items-center gap-20 pt-[20px] w-[86.8%] '>
                    <div className='border flex flex-row-reverse items-center gap-20 max-[1306px]:hidden '>
                        <div className='flex flex-row-reverse items-center gap-2'>
                            <img className=' rounded-full border border-[#ffffff] ' width={50} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                            <div className='flex flex-col items-center justify-center'>
                                <p className='font-medium text-[0.9em]'>{userInfo[currentLogAcc].username}</p>
                                <p className='text-[grey] text-[0.9em]'>{userInfo[currentLogAcc].fullname}</p>
                            </div>
                        </div>
                        <div className=''>
                            <button className='text-[#34a9f7] font-medium text-[0.8em]'>Switch</button>
                        </div>
                    </div>

                    <div className='overflow-x-hidden relative z-0'>
                        <div className='absolute top-0 right-0 z-10' onClick={() => {
                            setTransform(transform + 20)
                            console.log(transform)
                        }}>
                            <IoIosArrowDroprightCircle />
                        </div>

                        <div>
                            <IoIosArrowDropleftCircle />
                        </div>
                        <div style={{ transform: `translateX(${transform}px` }} className={`flex gap-5`}>
                            {
                                Object.entries(userInfo).map(([key, user]) => {
                                    console.log(user)
                                    return (
                                        <div key={key}>
                                            <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                            <p className=' text-[.7em] text-center mt-[5px]'>{user.username}</p>
                                        </div>
                                    )
                                })
                            }



                            {/* <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div>

                            <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div>

                            <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div>

                            <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div>

                            <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div>

                            <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div> */}

                            {/* <div>
                                <img className=' rounded-full border border-[#ffffff] ' width={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <p className=' text-[.7em] text-center mt-[5px]'>bibilashvili</p>
                            </div> */}


                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home