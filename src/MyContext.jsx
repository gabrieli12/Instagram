import React, { createContext, useState, useEffect ,useRef } from "react";

export const Mycontext = createContext()


export const MyProvider = ({ children }) => {
    //
    
    //
    const [userInfo, setUserInfo] = useState([])
   


    const submit = (data) => {



        //////////////////////////////////////
        let Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

        let uniqueId = ""

        
        let i = 0
        while (i < 5) {
            let randomIndex = Math.floor(Math.random() * Alphabet.length)
            uniqueId += Alphabet[randomIndex]
            i++
        }
        
        
        
        setUserInfo((prev) => [...prev, {
            [uniqueId]: {
                email: data.email,
                password: data.password,
                fullname: data.fullname,
                username: data.username,
                folowing: 0,
                folower: 0,
                post: {
                    post1: {
                        imgUrl: [],
                        like: 0,
                        comment: [{
                            user: {
                                name: "",
                                context: ""
                            }
                        }],
                        
                    }
                }
            }
        }])
        
        
        
    }
    useEffect(() => {
        console.log(userInfo)
        console.log(userInfo[0])
        for(let element in userInfo[0]){
            console.log(userInfo[0][element])
        }
    }, [userInfo])

    return (
        <Mycontext.Provider value={{ userInfo, submit }}>
            {children}
        </Mycontext.Provider>
    )
}

