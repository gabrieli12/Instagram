import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import { MyProvider } from "./MyContext"
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import Profile from "./Components/Profile"


function App() {
    return (
        <>
            <MyProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Signup />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element = {<Home/>}/>
                        <Route path="/profile" element = {<Profile/>}/>
                    </Routes>
                </BrowserRouter>
            </MyProvider>

        </>
    )
}


export default App