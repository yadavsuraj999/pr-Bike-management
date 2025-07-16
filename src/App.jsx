import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Login from "./page/Login"

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App