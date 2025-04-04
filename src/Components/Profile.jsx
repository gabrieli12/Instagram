import React from 'react'
import Asidemenu from './Asidemenu'
import { LuPlus } from "react-icons/lu";
import Footer from './Footer';
import { useContext } from 'react';
import { Mycontext } from '../MyContext';
import { BsPlusLg } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import UpdateProfilePic from './UpdateProfilePic';


function Profile() {
    const { userInfo, currentLogAcc, setCurrentLogAcc, setIsProfPicOpen } = useContext(Mycontext)

    // console.log(userInfo[currentLogAcc]?.folower)
    // console.log(userInfo[currentLogAcc])
    // console.log(userInfo[currentLogAcc])
    // console.log(userInfo[currentLogAcc])

    return (
        <>
            <section className='w-full h-screen overflow-hidden relative'>
                <Asidemenu />

                <UpdateProfilePic />

                {/* <div className='w-[254px] h-screen min-[1468px]:w-[338px] max-[981px]:w-[100px] max-[707px]:hidden'>

                </div> */}

                <div className='flex flex-col items-center justify-center w-[105%]'>
                    <div className=' flex  items-start justify-center flex-col gap-7 border-neutral-950  '>
                        <div className='flex items-center justify-end gap-20 pt-6 pl-8'>
                            <div className='justify-items-center max-[830px]:self-end  max-[830px]:justify-self-start  pt-8'>
                                <img className='w-[150px] h-[150px] max-[830px]:w-[100px]  max-[830px]:h-[100px] object-cover  rounded-full cursor-pointer' src={userInfo[currentLogAcc]?.profilePic}  alt="" onClick={() => setIsProfPicOpen(true)}/>
                                {console.log(userInfo[currentLogAcc])}
                            </div>
                            <div className=' flex flex-col max-[830px]:flex-col  items-center justify-start gap-5'>
                                <div className='flex items-center gap-5'>
                                    <h3 className='text-[1.2em] font-normal max-[830px]:hidden'>{userInfo[currentLogAcc]?.username}</h3>
                                    <div className='flex items-center gap-2'>
                                        <button className='bg-[#f0f0f0] px-[15px] py-[4px] rounded-lg text-[0.9em] font-medium max-[830px]:hidden'>Edit Profile</button>
                                        <button className='bg-[#f0f0f0] px-[15px] py-[4px] rounded-lg text-[0.9em] font-medium max-[830px]:hidden'>View archive</button>
                                        <img src="https://cdn-icons-png.flaticon.com/512/5693/5693241.png" alt="" className='w-[28px] max-[830px]:hidden' />
                                    </div>
                                </div>

                                <div className='hidden max-[830px]:flex w-full items-center justify-start '>
                                    <h3 className=' pr-[15px] py-[4px] rounded-[5px]'>{userInfo[currentLogAcc]?.username}</h3>
                                    <img src="public/setting.png" alt="" className='w-[28px]' />

                                </div>

                                {/* <div className='hidden max-[830px]:flex gap-1 w-full items-center justify-start'>
                                    <button className='bg-gray-200 px-[15px] py-[4px] rounded-[5px] text-[11px]'>Edit Profile</button>
                                    <button className='bg-gray-200 px-[15px] py-[4px] rounded-[5px] text-[11px]'>View archive</button>
                                </div> */}

                                <div className='flex items-center justify-start w-full gap-8'>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-medium'>{(userInfo[currentLogAcc]?.post).length}</p>
                                        <p className='text-[#737373]'>posts</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-medium'>{userInfo[currentLogAcc]?.folower}</p>
                                        <p className='text-[#737373]'>followers</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <p className='font-medium'>{userInfo[currentLogAcc]?.folowing}</p>
                                        <p className='text-[#737373]'>following</p>
                                    </div>
                                </div>

                                <div className='flex items-start justify-start w-full'>
                                    <div className='col-start-2 row-start-3  max-[830px]:row-start-4  max-[830px]:col-start-1 flex flex-col gap-1'>
                                        <h2 className='font-medium text-[0.9em]'>{userInfo[currentLogAcc]?.fullname}</h2>
                                        <div className='rounded-2xl  flex items-center gap-1 p-1 px-2  bg-[#f0f0f0] max-w-fit'>
                                            <FaThreads />
                                            <p className='text-[0.8em]   max-[830px]:text-[12px]'>{userInfo[currentLogAcc]?.username}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='max-[830px]:col-start-1 justify-items-start flex flex-col justify-center items-center pr-[90px] py-5 gap-2'>
                            <div className=' border border-[#dbdbdb] rounded-full  w-[87px] h-[87px] max-[830px]:w-[72px]  max-[830px]:h-[72px] flex items-center justify-center'>
                                <div className='bg-[#f5f5f5] rounded-full w-[80px] h-[80px] max-[830px]:w-[65px]  max-[830px]:h-[65px] flex items-center justify-center'>
                                    <BsPlusLg className='text-5xl text-[#c7c7c7]'
                                    />
                                </div>
                            </div>
                            <p className='text-[0.8em] font-medium  max-[830px]:text-[12px]'>New</p>
                        </div>

                    </div>




                </div>

                <div className=' flex items-center justify-center mt-[50px] w-[113%] '>

                    <div className='flex flex-col justify-center items-center border-t-1 border-[#dbdbdb] w-[935px] max-[1320px]:w-[55%]'>
                        <div className='flex w-[30%] justify-between gap-7'>
                            <div className='flex  items-center gap-1 py-[20px] border-t-1  '>
                                <img src="https://cdn-icons-png.flaticon.com/512/923/923137.png" alt="" className='w-[15px]' />
                                <p className='text-[0.8em] font-medium'>POSTS</p>
                            </div>
                            <div className='flex items-center gap-1 py-[20px]  '>
                                <img src="https://cdn-icons-png.flaticon.com/512/9511/9511721.png" alt="" className='w-[15px]' />
                                <p className='text-[0.8em] font-medium text-[#bababa]'>SAVED</p>
                            </div>
                            <div className='flex items-center gap-1 py-[20px]  '>
                                <img src="https://cdn-icons-png.flaticon.com/512/17847/17847702.png" alt="" className='w-[15px]' />
                                <p className='text-[0.8em] font-medium text-[#bababa]'>TAGGED</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-1'>
                            {userInfo[currentLogAcc]?.post.map((src, index) => {
                                // console.log(userInfo[currentLogAcc]?.imgUrl)

                                return <img src={src.imgUrl} key={index} className='w-[100%]' alt="" />
                            })}
                        </div>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Profile