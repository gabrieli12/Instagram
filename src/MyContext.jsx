import React, { createContext, useState, useEffect } from "react";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([])
    let addInfo = {
        email: "",
        password: "",
        fullname: "",
        username: "",


    }

    console.log(addInfo)
    // const [addInfo, setAddInfo] = useState(
    //     { email: "", password: "", fullname: "", username: "" })

    const updateInputValues = (e) => {
        // setAddInfo({ ...addInfo, [e.target.name]: e.target.value })
        addInfo = {
            ...addInfo,
            [e.target.name]: e.target.value
        }
    }

    const submit = (e) => {
        e.preventDefault()

        // alert("You have successfully registered.")

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
                ...addInfo,
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

        // addInfo = {
        //     email: "",
        //     password: "",
        //     fullname: "",
        //     username: "",
        // }
    }
    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
        <Mycontext.Provider value={{ userInfo, addInfo, updateInputValues, submit }}>
            {children}
        </Mycontext.Provider>
    )
}

