import React, { createContext, useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Mycontext = createContext()

// localStorage.clear()
export const MyProvider = ({ children }) => {

    const [currentLogAcc , setCurrentLogAcc] = useState("")


    const existAccounts = {
        "wolk1": {
            email: "giorgibibilashvili97@gmail.com",
            password: "bibila1234567",
            fullname: "Giorgi Bibilashvili",
            username: "adzinokivolk_bibila",
            folowing: 5,
            folower: 200763,
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
        },

        "wolk2": {
            email: "rostomchagunava1994@gmail.com",
            password: "1234567",
            fullname: "Rostom Chagunava",
            username: "daumorchilebeli",
            folowing: 5,
            folower: 5000,
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
        },


        "queen": {
            email: "meliroldan@gmail.com",
            password: "meli123",
            fullname: "Meli Roldan",
            username: "Melichka",
            folowing: 5,
            folower: 700456,
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
        },


        "wolk4": {
            email: "gabrielmolodini@gmail.com",
            password: "molodini1",
            fullname: "Gabriel Molodini",
            username: "Pasanaurski",
            folowing: 1,
            folower: 13,
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
        },


        "Goa77": {
            email: "goa@gmail.com",
            password: "goa123",
            fullname: "Goal Orientadze",
            username: "Chief Exclusive Officer",
            folowing: 2,
            folower: 3000000,
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
    }




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

