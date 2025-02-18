import React, { useState , useContext} from 'react'
import Footer from './Footer'
import { data, Link } from 'react-router-dom'
import { Mycontext } from '../Mycontext'
import {useForm} from "react-hook-form"

function Signup() {
    const { addInfo, updateInputValues, submit    } = useContext(Mycontext)
   
    const {register , handleSubmit , formState:{errors}} = useForm() 

    
    console.log(errors)




    return (
        <>
        <section className='bg-black w-full h-full sm:h-screen'>
            <div className='w-full flex h-[90%] items-center justify-center'>
                <div className=''>
                    <div className='flex flex-col gap-3'>
                        <div className='text-white md:border-1 md:border-[#363636]  flex flex-col items-center justify-center px-12 pt-10 gap-7 pb-12' >
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <h1 className='danceingScript font-bold text-[3em]'>Intagram</h1>
                                <p className=' font-medium max-w-[16rem] text-center text-[#747478]'>Sign up to see photos and videos from your friends.</p>
                            </div>
                            <form onSubmit={handleSubmit((data)=>{
                                
                                submit(data)

                            })} className='flex flex-col items-center justify-center gap-2 w-full'>
                                <input     className='border border-[#525252] bg-[#3636362d] w-full px-3 py-[11px] text-[0.8em] rounded-sm' name='email' {...register("email" , {required:"This Is Required"})}  type="text" placeholder='Phone number or Email' />
                                <div className='w-full'>
                                    <p className='text-red-600 text-[0.8em]'>{errors.email?.message}</p>
                                </div>
                                <input  {...register("password",{required:"Tis Is Required",minLength:{
                                    value:6,
                                    message:"Your password is to short and easy to guess.Please create a new one"
                                }} )}   className='border border-[#525252] bg-[#3636362d] w-full px-3 py-[11px] text-[0.8em] rounded-sm' name='password' type="password" placeholder='password' />
                                <div className='w-full'>
                                    <p className='text-red-600 text-[0.8em] max-w-[15rem]'>{errors.password?.message}</p>
                                </div>
                                
                                <input  {...register("fullname" , {required:"This is required",})}   className='border border-[#525252] bg-[#3636362d] w-full px-3 py-[11px] text-[0.8em] rounded-sm' name='fullname' type="text" placeholder='Full Name' />
                                <div className='w-full'>
                                    <p className='text-red-600 text-[0.8em]'>{errors.fullname?.message}</p>
                                </div>
                                <input  {...register("username" , {required:"This is required",})}  className='border border-[#525252] bg-[#3636362d] w-full px-3 py-[11px] text-[0.8em] rounded-sm' name='username' type="text" placeholder='Username' />
                                <div className='flex flex-col items-center gap-4'>
                                    <p className='max-w-[17rem] text-[0.8em] text-center text-[#acacac]'>People who use our service may have uploaded your contact information to Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628" className='text-[#a2c6ff]'>Learn More</a></p>

                                    <p className='max-w-[17rem]  text-[0.8em] text-center text-[#acacac]'>By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_US" className='text-[#a2c6ff]'>Terms </a>, 
                                    <a href="https://www.facebook.com/privacy/policy" className='text-[#a2c6ff]'> Privacy </a> , <a href="https://www.facebook.com/privacy/policy" className='text-[#a2c6ff]'> Policy </a> and <a href="https://privacycenter.instagram.com/policies/cookies/" className='text-[#a2c6ff]'>Cookies Policy </a></p>
                                </div>
                                <button  className={`mt-2 bg-[#0a69ad]  p-1 rounded-lg font-bold text-[#ffffff73] w-full `}>Sign Up</button>
                            </form>
                            
                            
                        </div>
                        <div className='md:border-1 md:border-[#363636] flex items-center justify-center px-15 py-7'>
                            <p className='text-white'>have an account? <span className='text-[#0a69ad]'><Link to="/login">Log In</Link></span></p>
                        </div>
                        <div className='text-white flex flex-col justify-center items-center gap-1'>
                            <p>Get the App</p>
                            <div className='flex w-full items-center justify-center gap-5'>
                                <div className='flex items-center border gap-1 p-1 rounded-md'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/6124/6124997.png" width={25}  />
                                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D9AEEA507-9C1A-4ECC-B1DD-BAEC4C3E3B61%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F">
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-[0.5em]'>GET IT ON</p>
                                        <h1 className='text-[1em] font-medium'>Google Play</h1>
                                    </div>
                                    </a>
                                </div>
    
                                <div className='flex items-center border gap-1 p-1 pr-4 pl-2'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" width={25} />
                                        <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C2560%2C1440">
                                            <div className='flex flex-col justify-center gap-0'>
                                                <p className='text-[0.5em]'>Get it from</p>
                                                <h1 className='text-[1em] font-medium'>Microsoft</h1>
                                            </div>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </section>
        </>
      )
}

export default Signup