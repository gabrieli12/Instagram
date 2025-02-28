import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoCompassOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

function Asidemenu() {
    return (
        <aside className='h-screen fixed  border-r w-[245px]  flex flex-col justify-between border-[#dadada] px-[12px] pt-[8px] pb-[20px] min-[1468px]:w-[338px] max-[981px]:w-[100px]'>
            <div>
                <div className='px-[12px] pt-[25px] max-[981px]:flex items-center justify-center '>
                    <h1 className='danceingScript font-bold text-[2em] cursor-pointer max-[981px]:hidden'>Intagram</h1>
                    <FaInstagram className='text-[1.5em] min-[981px]:hidden' />

                </div>
                <div className='flex flex-col items-end justify-start gap-3 mt-7 w-full'>
                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <GoHomeFill className='text-[1.8rem]' />
                        <p className='font-bold text-[1em] max-[981px]:hidden'>Home</p>
                    </button>

                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <GoSearch className='text-[1.8rem]' />
                        <p className='max-[981px]:hidden text-[1em]'>Search</p>
                    </button>

                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <IoCompassOutline className='text-[1.8rem]' />
                        <p className='max-[981px]:hidden text-[1em]'>Explore</p>
                    </button>

                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <img className='ml-1' src="https://cdn-icons-png.flaticon.com/512/5948/5948543.png" width={25} />
                        <p className='max-[981px]:hidden text-[1em]'>Reels</p>
                    </button>

                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <FiSend className='text-[1.7rem]' />
                        <p className='max-[981px]:hidden text-[1em]'>Messages</p>
                    </button>

                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <FaRegHeart className='text-[1.6rem]' />
                        <p className='max-[981px]:hidden text-[1em]'>Notification</p>
                    </button>

                    <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <FaRegSquarePlus className='text-[1.8rem]' />
                        <p className='max-[981px]:hidden text-[1em]'>Create</p>
                    </button>

                    <button className='flex items-center gap-4 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                        <img className=' rounded-full border border-[#dedede] ' width={27} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        <p className='max-[981px]:hidden text-[1em]'>Profile</p>
                    </button>




                </div>
            </div>

            <div>
                <button className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                    <RxHamburgerMenu className='text-[1.8rem]' />
                    <p className='max-[981px]:hidden text-[1em]'>More</p>
                </button>
            </div>
        </aside>
    )
}

export default Asidemenu