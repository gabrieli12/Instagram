import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoCompassOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import { RiMenuLine } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";

///
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useRef } from 'react'
import { Mycontext } from '../MyContext'
import { useForm } from "react-hook-form"
///

function Asidemenu() {

    const [more, setMore] = useState(1)
    const [switchAcc, setSwitchAcc] = useState(false)
    const[appearance , setAppearance] = useState(false)


    /////
    const { userInfo, currentLogAcc, setCurrentLogAcc } = useContext(Mycontext)
    const [countChar, setCountChar] = useState(0)



    const navigate = useNavigate()

    //errors
    const [error, setError] = useState(false)
    //useForms//
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    ////////////





    const logIn = (data) => {
        // e.preventDefault()



        for (let i in userInfo) {
            console.log(userInfo[i])
            if (userInfo[i].email === data.email && userInfo[i].password === data.password) {
                console.log(i)
                setCurrentLogAcc(i)
                alert("login sucssesfully")
                setError(false)
                navigate("/home")
            } else {
                console.error("Account doesn't Exist")
                setError(true)
            }
        }






        // setEmail("")
        // setPassword("")
        // setCountChar(0)
        reset()



    }

    /////




    return (
        <>
            <aside className='h-screen fixed  border-r w-[245px]  flex flex-col justify-between border-[#dadada] px-[12px] pt-[8px] pb-[20px] min-[1508px]:w-[338px] max-[981px]:w-[100px]'>
                <div>
                    <div className='px-[12px] pt-[25px] max-[981px]:flex items-center justify-center '>
                        <h1 className='danceingScript font-bold text-[2em] cursor-pointer max-[981px]:hidden'>Intagram</h1>
                        <FaInstagram className='text-[1.5em] min-[981px]:hidden' />

                    </div>
                    <div className='flex flex-col items-end justify-start gap-3 mt-7 w-full'>
                        <button onClick={()=>{
                            navigate("/home")
                        }} className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
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

                        <button onClick={()=>{
                            navigate("/profile")
                        }} className='flex items-center gap-4 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>
                            <img className=' rounded-full border border-[#dedede] ' width={27} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                            <p className='max-[981px]:hidden text-[1em]'>Profile</p>
                        </button>




                    </div>
                </div>

                <div className='relative'>

                    <div style={{ boxShadow: "0px 3px 11px 1px rgba(0,0,0,0.12" }} className={`${appearance?"absolute" : "hidden"}  absolute w-[266px]  -top-30  rounded-2xl  max-[1508px]:w-[230px] max-[981px]:left-23 max-[981px]:w-[265px]`}>

                        <div className='flex flex-col'>
                            <div className='flex items-center justify-between  border-b border-[#8080803a] w-full'>
                                <div className='p-[15px]  flex items-center gap-3 '>
                                    <img onClick={()=>{
                                        setAppearance(false)
                                        setMore(2)
                                    }} src="https://cdn-icons-png.flaticon.com/512/10728/10728732.png" width={12} />
                                    <p className='font-medium'>Switch appearance</p>
                                </div>
                                <div className='p-[15px]'>
                                    <MdOutlineWbSunny className='text-[1.1em]'/>
                                </div>
                            </div>
                            <div className='w-full hover:bg-[#eeeeeec9] p-[16px] pb-6 pl-7   rounded-md'>
                                <button className='flex items-center gap-3'>
                                    <p className='text-[0.9em]'>Dark mode</p>
                                </button>
                            </div>
                        </div>



                    </div>


                    <div style={{ boxShadow: "0px 3px 11px 1px rgba(0,0,0,0.12" }} className={`${more % 2 != 0 ? "hidden" : "absolute"} z-50 absolute w-[265px] h-[410px] -top-105 p-[8px] rounded-2xl  max-[1508px]:w-[230px] max-[981px]:left-23 max-[981px]:w-[265px]`}>

                        <div className='flex flex-col border-b-4 border-[#eeeeeec9]'>
                            <div className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md'>
                                <button className='flex items-center gap-3'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/5693/5693241.png" alt="" width={19} />
                                    <p className='text-[0.9em]'>Settings</p>
                                </button>
                            </div>

                            <div className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md'>
                                <button className='flex items-center gap-3'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/8238/8238737.png" width={19} />

                                    <p className='text-[0.9em]'>Your Activity</p>
                                </button>
                            </div>

                            <div className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md'>
                                <button className='flex items-center gap-3'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/15310/15310416.png" alt="" width={19} />
                                    <p className='text-[0.9em]'>Saved</p>
                                </button>
                            </div>

                            <div onClick={()=>{
                                setAppearance(true)
                                setMore(1)
                            }} className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md'>
                                <button className='flex items-center gap-3'>
                                    <MdOutlineWbSunny className='w-[19px] h-[19px]' />
                                    <p className='text-[0.9em]'>Switch appearance</p>
                                </button>
                            </div>

                            <div className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md'>
                                <button className='flex items-center gap-3'>
                                    <TbMessageReport className='w-[19px] h-[19px]' />
                                    <p className='text-[0.9em]'>Report problem</p>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div onClick={() => {
                                setSwitchAcc(true)
                            }} className='cursor-pointer border-b border-[#eeeeeec9] pt-[5px] pb-[5px]'>
                                <div className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md '>
                                    <p className='text-[0.9em] cursor-pointer'>Switch account</p>
                                </div>
                            </div>

                            <div className='pt-[5px] cursor-pointer'>
                                <div onClick={() => {
                                    navigate("/login")
                                }} className='w-full hover:bg-[#eeeeeec9] p-[16px]   rounded-md'>
                                    <p className='text-[0.9em] cursor-pointer'>Log Out</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button onClick={() => {
                        setMore(more + 1)
                    }} className='flex items-center gap-3 px-[12px] py-[8px] text-[1em] w-full hover:bg-[#eeeeeec9] rounded-md cursor-pointer max-[981px]:justify-center'>

                        <TiThMenu className={`${more % 2 == 0 ? "block" : "hidden"} text-[1.8rem]`} />
                        <RiMenuLine className={`${more % 2 != 0 ? "block" : "hidden"} text-[1.8rem]`} />
                        <p className={`${more % 2 == 0 ? "font-bold" : "font-normal"} max-[981px]:hidden text-[1em]`}>More</p>
                    </button>
                </div>
            </aside>
            <div className={`${switchAcc ? "absolute" : "hidden"}  absolute h-screen w-full z-10 bg-[#000000ab] flex items-center justify-center`}>
                <div className='w-[400px] h-[463px] '>
                    <div className='flex flex-col gap-3'>
                        <div className='text-black bg-white rounded-xl  flex flex-col items-center justify-center pt-[20px] gap-7  relative h-[435px] px-[65px]' >
                            <div onClick={() => {
                                setSwitchAcc(false)
                            }} className='absolute top-4 right-4 cursor-pointer'>
                                <MdOutlineClear className='text-[1.7em] ' />
                            </div>
                            <h1 className='danceingScript font-bold text-[3em]'>Intagram</h1>
                            <form onSubmit={handleSubmit((data) => {
                                logIn(data)
                            })} className='flex flex-col items-center justify-center gap-2 w-full'>


                                <input  {...register("email", { required: "This is required" })} className={`border ${errors.email ? "border-[#a01616]" : "border-[#52525252]"}  bg-[#f5f5f5] w-full px-3 py-[9px] text-[0.8em] rounded-xs outline-none`} type="text" placeholder='Phone number,username,or email' />
                                {errors.email && <p className='text-red-500 self-start'>{errors.email?.message}</p>}
                                <input  {...register("password", { required: "This is required" })} className={`border ${errors.password ? "border-[#a01616]" : "border-[#52525252]"}  bg-[#f5f5f5] w-full px-3 py-[9px] text-[0.8em] rounded-xs outline-none`} type="password" placeholder='Password' />
                                <div className='w-full flex items-center justify-start gap-[10px] pt-2'>
                                    <input type="checkbox" className='checkbox1 appearance-none w-[16px] h-[16px] border-1 border-[#8080803e] rounded-xs bg-white cursor-pointer' />
                                    <p className='text-[0.75em]'>Save login info</p>
                                </div>
                                {errors.password && <p className='text-red-500 self-start'>{errors.password?.message}</p>}
                                <button className={`mt-2  ${countChar > 0 ? "bg-[#0093f5] text-white cursor-pointer" : "text-[#ffffffa4] bg-[#4db5fa]"} text-[#ffffffce]   p-1 rounded-lg font-bold  w-full`}>Log in</button>


                            </form>

                            <p className={`${error == false && "hidden"} text-red-500 text-[0.9em] max-w-[20rem] text-center`}>Sorry, your password was incorrect. Please double-check your password.</p>
                            <a href="#" className='text-[0.9em] text-[#000057]'>Forgot password?</a>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Asidemenu