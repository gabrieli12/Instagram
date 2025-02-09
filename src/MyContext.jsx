import React, { createContext, useState, useEffect ,useRef } from "react";

export const Mycontext = createContext()


export const MyProvider = ({ children }) => {
    //
    const regEmailRef = useRef(NaN)
    const regPasswordlRef = useRef(NaN)
    const regNameRef = useRef(NaN)
    const regUsernameRef = useRef(NaN)
    //
    const [userInfo, setUserInfo] = useState([])
   

    // console.log(addInfo)
    // const [addInfo, setAddInfo] = useState(
    //     { email: "", password: "", fullname: "", username: "" })

    // const updateInputValues = (e) => {
    //     // setAddInfo({ ...addInfo, [e.target.name]: e.target.value })
    //     addInfo = {
    //         ...addInfo,
    //         [e.target.name]: e.target.value
    //     }
    // }

    const submit = (e) => {
        e.preventDefault()


        console.log(regEmailRef.current.value)

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
                email: regEmailRef.current.value,
                password: regPasswordlRef.current.value,
                fullname: regNameRef.current.value,
                username: regUsernameRef.current.value,
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
        regEmailRef.current.value = ""
        regPasswordlRef.current.value = ""
        regNameRef.current.value = ""
        regUsernameRef.current.value = ""
        
        
    }
    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
        <Mycontext.Provider value={{ userInfo, submit , regEmailRef , regPasswordlRef , regNameRef,regUsernameRef }}>
            {children}
        </Mycontext.Provider>
    )
}

