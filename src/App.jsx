import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import { MyProvider } from "./Mycontext"
import Signup from "./Components/Signup"


function App() {
    return (
        <>
            <MyProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Signup />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>

            </MyProvider>

        </>
    )
}


export default App