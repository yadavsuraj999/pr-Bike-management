import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Login from "./page/Login"
import { ToastContainer } from "react-toastify"
import Bikeinfo from "./page/Bikeinfo"
import Addbike from "./page/Addbike"
import { useState } from "react"
import Editbike from "./page/Editbike"
import Protecterroute from "./components/Protecterroute"

const App = () => {

  const [isloggedin, setIsloggedin] = useState(false)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Protecterroute Component={Login} />} />
        <Route path="/bikeinfo" element={<Bikeinfo />} />
        <Route path="/addbike" element={<Addbike />} />
        <Route path="/editebike/:id" element={<Editbike />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App


// i made bike management system my ui is not good please genrate morden ui without changing my logic