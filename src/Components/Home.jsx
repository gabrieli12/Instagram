
import Asidemenu from './Asidemenu';
import { useContext } from 'react';
import { Mycontext } from '../MyContext';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState, useEffect, useRef } from 'react';
import Mainposts from './Mainposts';

import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


import { CiSaveUp2 } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

import React from "react";
import Asideofcomment from './Asideofcomment';




function Home() {
    const { userInfo, setUserInfo, currentLogAcc, setCurrentLogAcc, posts } = useContext(Mycontext)
    const [transform, setTransform] = useState(0)
    // 
    const [showComment, setShowComment] = useState(false)
    ///////////////////////////////////////////
    // 
    const [valueOfcoment, setValueOfcoment] = useState('')
    const [choosePostid, setChoosePostid] = useState(0)






    ///////////////////////////////////////////// 
    // const ArrowLeft = (postIndex,setPostIndex) => {

    //     if(postIndex > 0){
    //         setPostIndex(postIndex - 1)
    //     }
    // }

    // const ArrowRight = (postIndex,setPostIndex,item) => {
    //     if(postIndex < item.post.length-1){
    //         setPostIndex(postIndex + 1)
    //     }
    // }

    // //////////////////////

    const Addlike = (id, userId,item) => {

        console.log(item)

        setUserInfo((prev) => {
            return {
                ...prev,
                [userId]: {
                    ...prev[userId], post: prev[userId].post.map((postitem) => {
                        if (postitem.id === id) {
                            return {
                                ...postitem,
                                like: postitem.like + 1
                            };
                        }
                        return postitem;
                    })
                }
            }
        }
        )
    }

    const AddComent = (id, userId) => {
        setUserInfo((prev) => {
            return {
                ...prev,
                [userId]: {
                    ...prev[userId], post: prev[userId].post.map((postitem) => {
                        if (postitem.id === id) {
                            return {
                                ...postitem,
                                comment: [...postitem.comment, { UserName: userInfo[currentLogAcc].username, content: valueOfcoment }]
                            };
                        }
                        return postitem;
                    })
                }
            }
        }
        )
        setValueOfcoment('')
        console.log(userInfo[userId].post[0].comment)
    }


    const displayComent = (item) => {
        setShowComment(true)
        console.log(item.comment)
    }

    return (
        <section className='relative'>
            <Asidemenu />
            <div className='gio z-0 flex'>
                <div className=' flex justify-center items-start gap-20 pt-[20px] w-[86.8%] '>
                    <Mainposts />
                    <div className='w-[319px] h-[546] max-[1346px]:hidden '>
                        <div className='  flex flex-row-reverse items-center justify-between  '>
                            <div className='pl-5  flex flex-row-reverse items-center gap-2'>
                                <img className=' rounded-full border border-[#ffffff] ' width={50} src={userInfo[currentLogAcc].profilePic} alt="" />
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
                                    return (
                                        <div key={key} className='  flex flex-row-reverse items-center justify-between  '>
                                            <div className='flex flex-row-reverse items-center gap-2'>
                                                <img className='w-[50px] h-[50px] object-cover rounded-full border border-[#ffffff] '  src={user.profilePic} alt="" />
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
                                    return (
                                        <div className='flex flex-col items-center justify-center' key={key}>
                                            <img className='object-cover w-[60px] h-[60px] rounded-full border border-[#ffffff] ' width={60} src={user.profilePic} alt="" />
                                            <p className=' text-[.7em] text-center mt-[5px]'>{user.username}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className='absolute flex flex-col gap-1 items-center py-3 top-[130px] right-[53%] translate-x-[50%] w-[35%]  '>


                {  
                posts.length >0 ? 
                    posts.map((item, index) => {

                        return (
                            <div key={index} className='w-full border-b-1 py-2 my-2 relative'>
                                <div className='w-full flex items-center justify-between px-[12px] my-1'>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src={userInfo[item.userId]?.profilePic || "https://img.icons8.com/?size=100&id=23264&format=png&color=000000"} alt="profile" className='w-[32px] h-[32px] rounded-full' />
                                        <p>{userInfo[item.userId].username}</p>
                                    </div>
    
                                    <p>...</p>
                                </div>
                                <div className='relative'>
                                    <FaArrowAltCircleRight onClick={() => ArrowRight()} className={`block cursor-pointer absolute text-2xl mx-1 right-0 top-[50%]`} />
                                    <img src={item.imgUrl[0]} alt="post" />
                                    <FaArrowAltCircleLeft onClick={() =>
                                        ArrowLeft()} className={`block cursor-pointer absolute text-2xl mx-1 left-0 top-[50%]`} />
                                </div>
                                <div className='flex items-center justify-between my-2'>
                                    <div className='flex items-center justify-start gap-2'>
                                        <div className='z-10 relative' onClick={() => Addlike(item.id, item.userId,item)}><FaRegHeart className='cursor-pointer -z-10 relative' /></div>
                                        <FaRegComment onClick={() => displayComent(item)} />
                                        <FaLocationArrow />
                                    </div>
                                    <CiSaveUp2 />
                                </div>
                                <div className='my-2'>
                                    <p>{`${item.like} Liked`}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 w-full pr-1'>
                                        <input type="text" value={valueOfcoment} onChange={(e) => setValueOfcoment(e.target.value)} className='w-full' placeholder='Add a comment...' />
                                        <button className='cursor-pointer' onClick={() => AddComent(item.id, item.userId)}>Post</button>
                                    </div>
    
                                    <CiFaceSmile />
                                </div>
                            </div>
                        )
                    })
                : ""}
                
            </div>

            < div className={`${showComment? "fixed" :"hidden"}  top-0 bg-gray-900/50  w-screen h-screen border-1 flex items-center justify-center`}>
                {/* <button className='absolute top-0 right-0'>x</button> */}
                <Asideofcomment setShowComment={setShowComment} displayComent={displayComent} userInfo={userInfo} currentLogAcc={currentLogAcc}/>
            </div>

        </section >
    )
}

export default Home 