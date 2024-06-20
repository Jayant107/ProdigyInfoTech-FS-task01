import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage"; 

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
