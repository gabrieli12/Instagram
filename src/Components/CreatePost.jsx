import React from 'react'
import { useContext, useState, useRef } from 'react'
import { Mycontext } from '../MyContext'
import { MdClear } from "react-icons/md";
import media from "../../public/media.png"
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

function CreatePost() {
    const { userInfo, currentLogAcc, setCurrentLogAcc, createPost, setCreatepost, setUserInfo } = useContext(Mycontext)
    const [postImage, setPostImage] = useState(null);

    const [isimageUpload, setIsImageUpload] = useState(false)

    // let postref = useRef()

    const handleImageUpload = (e) => {
        let file = e.target.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                // postref.current = reader.result;
                setPostImage(reader.result);
                setIsImageUpload(true)
            };
            reader.readAsDataURL(file);

        }

    };


    const submit = (e) => {
        e.preventDefault()
        // console.log(postref.current)
        /// - ? ?? ? 

        setUserInfo((prev) => {
            return {
                ...prev,
                [currentLogAcc]: {
                    ...prev[currentLogAcc],
                    post: [
                        ...(prev[currentLogAcc].post),
                        {
                            desc: valueoftext,
                            userId: [currentLogAcc],
                            id: prev[currentLogAcc].post.length,
                            imgUrl: [postImage],
                            like: 0,
                            comment: [
                                {

                                }
                            ]
                        }
                    ]
                }
            }
        })
        setCreatepost(false)
    }


    const [valueoftext, setValueoftext] = useState("")

    return (
        <div className={` ${createPost ? "fixed" : "hidden"}  w-full h-full bg-[#000000ab]  flex items-center justify-center z-50`} >

            <button className='cursor-pointer absolute top-4 right-3 text-2xl text-white' onClick={() => setCreatepost(false)}><MdClear /></button>
            <div className={`w-[855px] rounded-xl h-[900px] overflow-hidden ${isimageUpload ? "md:w-[56%] w-[700px]" : "flex"} scroll-auto bg-white flex flex-col items-center justify-start   `}>

                <div className={`flex w-full items-start justify-end ${isimageUpload ? "justify-between" : "justify-center"} border-b border-[#dbdbdb] px-3 py-2`}>
                    <div className='flex w-[60%] justify-between items-center'>
                        <h1 className='text-[1em]  font-medium'>Create new post</h1>
                        <p onClick={submit} className={` ${isimageUpload ? "block" : "hidden"} text-[#0093f5] font-medium text-[0.9em] cursor-pointer`}>Share</p>
                    </div>
                </div>


                <form className={`h-[50%] ${isimageUpload ? "hidden" : "flex"}  flex-col items-center justify-center gap-5 w-full h-full`}>
                    <img src={media} alt="" width={96} height={77} />
                    <p className='text-[1.3em]'>Drag photos and videos here</p>

                    <label className='hover:bg-[#1877f2] cursor-pointer border bg-[#0093f5] text-white px-[17px] py-[6px] rounded-lg text-[0.9em] font-medium' htmlFor="file">Select from computer</label>
                    <input id='file' className='border border-[#52525252] bg-[#f5f5f5] w-[60%] px-3 py-[9px] text-[0.8em] rounded-xs outline-none ' onChange={handleImageUpload} type="file" style={{ display: "none" }} />
                    {/* <input className='border border-[#52525252] bg-[#f5f5f5] w-[60%] px-3 py-[9px] text-[0.8em] rounded-xs outline-none' type="text" placeholder='Title the post.' /> */}
                    {/* <button onClick={submit} className='bg-[#0093f5] text-white cursor-pointer p-1 rounded-lg font-bold  w-[35%]'>Post</button> */}
                </form>
                <div className={`w-full h-[100%] ${isimageUpload ? "flex" : "hidden"}  items-start  relative`}>
                    <img className='w-[70%] h-full object-cover' src={postImage} alt="" />
                    <div className='w-[30%]  mr-3'>
                        <div className='flex flex-col  items-start gap-2  w-full'>
                            <div className='flex items-center gap-3 w-full pl-4 pt-4'>
                                <img className=' rounded-full border border-[#ffffff] w-[35px] h-[35px] object-cover ' src={userInfo[currentLogAcc].profilePic} alt="" />
                                <div className='flex flex-col items-end justify-center'>
                                    <p className='font-medium text-[0.9em]'>{userInfo[currentLogAcc]?.username}</p>

                                </div>
                            </div>
                            <textarea className='outline-none resize-none  w-full h-[200px] ' onChange={(e) => setValueoftext(e.target.value)} name="" id=""></textarea>
                            <div className='flex justify-between items-center w-full pb-3 pr-3 border-b border-[#dbdbdb] pl-4 pt-4'>
                                <HiOutlineEmojiHappy className='text-[gray] text-[1.5em]' />
                                <div>
                                    <p className='text-[#c7c7c7] text-[0.8em]'><span>0</span>/<span>2,200</span></p>
                                </div>

                            </div>

                            <div className='flex justify-between items-center w-full   pr-3 pl-4 pt-4 '>
                                <p className='text-[#c7c7c7]'>Add location</p>
                                <MdOutlineLocationOn className='text-[1.3em]' />
                            </div>
                            <div className='flex justify-between items-center w-full   pr-3 pl-4 pt-4' >
                                <p className='text-[#c7c7c7]'>Add colaborators</p>
                                <img src="https://cdn-icons-png.flaticon.com/512/1436/1436428.png" alt="" width={18} />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreatePost