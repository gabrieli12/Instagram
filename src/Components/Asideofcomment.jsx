import React from 'react'


function Asideofcomment({setShowComment, userInfo, currentLogAcc }) {
    return (
        <div className='w-[70%] h-[90%]   opacity-100 bg-white flex relative'>

            <button onClick={() =>{setShowComment(false)}} className='absolute cursor-pointer top-[-4%]  right-[-15%]'>x</button>



            <img className='w-[50%]' src={`public/profil.rostom2.png`} alt="" />
            <div className='w-[50%] h-[100%] flex flex-col'>
                <div className='flex w-full items-center justify-between  border-b-1 p-3'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[25px] h-[25px] rounded-full' src={`public/profil.rostom2.png`} alt="" />
                        {/* <p>{userInfo[currentLogAcc].username}</p> */}
                    </div>
                    <p>...</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Asideofcomment