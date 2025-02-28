import React from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useRef } from 'react'
import { Mycontext } from '../Mycontext'
import { useForm } from "react-hook-form"


function Login() {
    const { userInfo,currentLogAcc , setCurrentLogAcc } = useContext(Mycontext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [countChar, setCountChar] = useState(0)
     
    

    const navigate = useNavigate()

    //errors
    const [error, setError] = useState(false)
    //useForms//
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    ////////////

    //useRef
    const logPasswordRef = useRef()

    ////

    const handleEmailChange = (e) => {
        setEmail(e.target.value)


    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
        setCountChar(countChar + 1)
    }

    const changeRestart = (e) => {
        e.preventDefault()
    }

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

    return (
        <>
            <section className='bg-black w-full h-screen'>
                <div className='w-full flex h-[90%] items-center justify-center'>
                    <div className='flex justify-center  '>
                        <div className=" hidden bg-[url(../public/frame.png)] w-[440px] h-[630px] bg-no-repeat bg-center bg-cover relative md:block">
                            <div className='bgImage w-[75%] h-[92%] absolute bg-no-repeat bg-center right-2 top-1'></div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='text-white md:border-1 md:border-[#363636]  flex flex-col items-center justify-center px-7 pt-5 gap-7 pb-6' >
                                <h1 className='danceingScript font-bold text-[3em]'>Intagram</h1>
                                <form onSubmit={handleSubmit((data) => {
                                    logIn(data)
                                })} className='flex flex-col items-center justify-center gap-2 w-full'>


                                    <input  {...register("email", { required: "This is required" })} className={`border ${errors.email ? "border-[#a01616]" : "border-[#525252]"}  bg-[#3636362d] w-full px-3 py-[11px] text-[0.8em] rounded-sm outline-none`} type="text" placeholder='Phone number,username,or email' />
                                    {errors.email && <p className='text-red-500 self-start'>{errors.email?.message}</p>}
                                    <input  {...register("password", { required: "This is required" })} className={`border ${errors.password ? "border-[#a01616]" : "border-[#525252]"}  bg-[#3636362d] w-full px-3 py-[11px] text-[0.8em] rounded-sm outline-none`} type="password" placeholder='Password' />
                                    {errors.password && <p className='text-red-500 self-start'>{errors.password?.message}</p>}
                                    <button className={`mt-2  ${countChar > 0 ? "bg-[#0093f5] text-white cursor-pointer" : "text-[#ffffff73] bg-[#0a69ad]"}   p-1 rounded-lg font-bold  w-full`}>Log in</button>


                                </form>
                                <div className='flex items-center gap-5 w-full'>
                                    <hr className='w-[50%] text-[#363636]' />
                                    <p className='text-[#ffffff73] font-bold'>OR</p>
                                    <hr className='w-[50%] text-[#363636]' />
                                </div>
                                <button className='text-[#0093f5] flex items-center gap-2'> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" width={20} /> <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Foidc%2F%3Fapp_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignupviafb%252F%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bprofile%2Blinking%26state%3DATA8AmyGgv1kiwuNXz9xiUZems6ZlTlovd_xZxeRb0fk53KfYbN_vFpySZyJr125lxgZU7H1ftaMLOY0oHMDYMdC-33ndN_s98njXtJHMHv7z-Q6_ocZPjY3pqLuWMbcZaeeoJVx8B-OslW-Azisx1SZM8NwvButvAigoWd_OVuWR2pzN9EYWf3rGyiO3-3r5g7H2JRCuXqV0EJ12xfu7k9CQD2XtLdRLM33IekUDray6zyXFWk_j7SwDz-AYzg4j1iL">Log in with Facebook</a></button>
                                <p className={`${error == false && "hidden"} text-red-500 text-[0.9em] max-w-[20rem] text-center`}>Sorry, your password was incorrect. Please double-check your password.</p>
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className='md:border-1 md:border-[#363636] flex items-center justify-center px-15 py-5'>
                                <p className='text-white'>Don't have an account? <span className='text-[#0a69ad]'><Link to="/signup">Sign Up</Link></span></p>
                            </div>
                            <div className='text-white flex flex-col justify-center items-center gap-1'>
                                <p>Get the App</p>
                                <div className='flex w-full items-center justify-center gap-5'>
                                    <div className='flex items-center border gap-1 p-1 rounded-md'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/6124/6124997.png" width={25} />
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
                <Footer />

            </section>
        </>
    )
}

export default Login