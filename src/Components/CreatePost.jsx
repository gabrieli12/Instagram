import React from 'react'
import { useContext, useState, useRef } from 'react'
import { Mycontext } from '../MyContext'

function CreatePost() {
    const { userInfo, currentLogAcc, setCurrentLogAcc, createPost, setCreatepost, setUserInfo } = useContext(Mycontext)
    // const [postImage, setPostImage] = useState(null);

    let postref = useRef()

    const handleImageUpload = (e) => {
        let file = e.target.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                postref.current = reader.result;
                // setPostImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const submit = (e) => {
        e.preventDefault()
        console.log(postref.current) 
        /// - ? ?? ? 
        
            setUserInfo((prev) => {
                return {
                    ...prev,
                    [currentLogAcc]: {
                        ...prev[currentLogAcc],
                        post: [
                            ...(prev[currentLogAcc].post),
                            {
                                userId: [currentLogAcc],
                                id: prev[currentLogAcc].post.length,
                                imgUrl: [postref.current],
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

    return (
        <div className={` ${createPost ? "fixed" : "hidden"} w-full h-full bg-[#000000ab]  flex items-center justify-center z-10`} >

            <button className='cursor-pointer absolute top-4 right-3 text-2xl text-white' onClick={() => setCreatepost(false)}>x</button>
            <div className='w-[500px] rounded-xl h-[500px] bg-white flex flex-col items-center justify-evenly gap-5'>
                <h1 className='text-[1.5em]  font-bold'>Create new Post</h1>
                <form className='h-[50%] flex flex-col items-center justify-center gap-5 w-full'>
                    <input className='border border-[#52525252] bg-[#f5f5f5] w-[60%] px-3 py-[9px] text-[0.8em] rounded-xs outline-none' onChange={handleImageUpload} type="file" />
                    <input className='border border-[#52525252] bg-[#f5f5f5] w-[60%] px-3 py-[9px] text-[0.8em] rounded-xs outline-none' type="text" placeholder='Title the post.' />
                    <button onClick={submit} className='bg-[#0093f5] text-white cursor-pointer p-1 rounded-lg font-bold  w-[35%]'>Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost