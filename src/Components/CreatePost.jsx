import React from 'react'
import { useContext, useState, useRef } from 'react'
import { Mycontext } from '../MyContext'

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
        <div className={` ${createPost ? "fixed" : "hidden"}  w-full h-full bg-[#000000ab]  flex items-center justify-center z-10`} >

            <button className='cursor-pointer absolute top-4 right-3 text-2xl text-white' onClick={() => setCreatepost(false)}>x</button>
            <div className={`w-[500px] rounded-xl h-[500px] overflow-hidden ${isimageUpload ? "md:w-[90%] w-[700px]" : "flex"} scroll-auto bg-white flex flex-col items-center justify-start   `}>
                
                <div className={`flex w-full items-start ${isimageUpload? "justify-between" : "justify-center"} border-b-2 border-[#52525252] px-3`}>
                    <h1 className='text-[1.5em]  font-bold'>Create new Post</h1>
                    <button onClick={submit} className={` ${isimageUpload ? "block" : "hidden"} bg-[#0093f5] text-white cursor-pointer p-1 rounded-lg font-bold  w-[35%]`}>share</button>
                </div>


                <form className={`h-[50%] ${isimageUpload ? "hidden" : "flex"}  flex-col items-center justify-center gap-5 w-full`}>
                    <input className='border border-[#52525252] bg-[#f5f5f5] w-[60%] px-3 py-[9px] text-[0.8em] rounded-xs outline-none ' onChange={handleImageUpload} type="file" />
                    {/* <input className='border border-[#52525252] bg-[#f5f5f5] w-[60%] px-3 py-[9px] text-[0.8em] rounded-xs outline-none' type="text" placeholder='Title the post.' /> */}
                    {/* <button onClick={submit} className='bg-[#0093f5] text-white cursor-pointer p-1 rounded-lg font-bold  w-[35%]'>Post</button> */}
                </form>
                <div className={`w-full h-[93%] ${isimageUpload ? "flex" : "hidden"}  items-start  relative`}>
                    <img className='w-[60%] h-full object-cover' src={postImage} alt="" />
                    <div >
                        <div className='pl-5  flex  items-start gap-2'>
                                <img className=' rounded-full border border-[#ffffff] w-[40px] h-[40px] '  src={userInfo[currentLogAcc].profilePic} alt="" />
                                <div className='flex flex-col items-end justify-center'>
                                    <p className='font-medium text-[0.9em]'>{userInfo[currentLogAcc]?.username}</p>
                            
                                </div>
                               <textarea onChange={(e)=> setValueoftext(e.target.value)} name="" id=""></textarea>          
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreatePost