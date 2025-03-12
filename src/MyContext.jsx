import React, { createContext, useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import existAccounts from "./Userdata";

export const Mycontext = createContext()

// localStorage.clear()
export const MyProvider = ({ children }) => {
    
    const [currentLogAcc , setCurrentLogAcc] = useState(localStorage.getItem("currentLogAcc") || [])
    localStorage.setItem("currentLogAcc" , currentLogAcc)

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("account")) || existAccounts)

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



        setUserInfo((prev) => {
            return {
                ...prev,

                [uniqueId]: {
                    email: data.email,
                    password: data.password,
                    fullname: data.fullname,
                    username: data.username,
                    folowing: 0,
                    folower: 0,
                    image:[],
                    post:[
                        {
                            imgUrl: [],
                            like: 0,
                            comment: [{
                                user: {
                                    name: "",
                                    context: ""
                                }
                            }],

                        }
                    ]
                }
            }
        })

        // navigate("/login")

    }


    useEffect(() => {
        localStorage.setItem("account", JSON.stringify(userInfo))
        console.log(JSON.parse(localStorage.getItem("account")))


        console.log(userInfo)
        console.log(userInfo[0])
        for (let element in userInfo[0]) {
            console.log(userInfo[0][element])
        }
    }, [userInfo])

    return (
        <Mycontext.Provider value={{ userInfo, submit,currentLogAcc , setCurrentLogAcc }}>
            {children}
        </Mycontext.Provider>
    )
}

