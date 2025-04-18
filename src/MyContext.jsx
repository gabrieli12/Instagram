import React, { createContext, useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import existAccounts from "./Userdata";


export const Mycontext = createContext()


// localStorage.clear()
export const MyProvider = ({ children }) => {

    let Myarr = []

    const [currentLogAcc, setCurrentLogAcc] = useState(localStorage.getItem("currentLogAcc") || [])

  

    localStorage.setItem("currentLogAcc", currentLogAcc)

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("account")) || existAccounts)

    const [posts, setPosts] = useState([])

    const [isProfPicOpen, setIsProfPicOpen] = useState(false);

    //

    const [profilePic, setProfilePic] = useState(userInfo[currentLogAcc]?.profilePic)

    // 
    const [createPost, setCreatepost] = useState(false)
    



    

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
                    image: [],
                    profilePic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                    post: [
                        
                    ]
                }
            }
        })

        // navigate("/login")

    }

    // console.log(userInfo)

    useEffect(() => {
        localStorage.setItem("account", JSON.stringify(userInfo))

        // for (let element in userInfo[0]) {
        //     console.log(userInfo[0][element])
        // }

        Myarr = []

        for (let element in userInfo) {
            userInfo[element].post.map((post) => {
                Myarr.push(post)
            }
            )
        }
        setPosts(Myarr)
        // console.log(Myarr)
        shuffle(Myarr)
        // console.log(Myarr)
        // console.log(shuffle(Myarr))
        // console.log(shuffle(Myarr))
    }, [userInfo])


    const shuffle = useCallback ((array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
        
    },[])
    


    return (
        <Mycontext.Provider value={{ userInfo, setUserInfo, submit, currentLogAcc, setCurrentLogAcc,posts, 
            isProfPicOpen, setIsProfPicOpen,profilePic, 
            setProfilePic,userInfo,createPost, setCreatepost}}>
            {children}
        </Mycontext.Provider>
    )
}

