import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../MyContext'
import image from "../../public/image 4.png"


function Mainposts() {
    const { userInfo } = useContext(Mycontext)


    return (
        <section>
            <div>
                {Object.entries(userInfo).map(([key, user]) => {
                    user.post.map((element , index)=>{
                        return(
                            <img src={element[0]}/>
                            
                        )
                    })

                })}
            </div>
        </section>
    )
}

export default Mainposts