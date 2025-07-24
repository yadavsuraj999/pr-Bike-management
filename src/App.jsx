import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Login from "./page/Login"
import { ToastContainer } from "react-toastify"
import Bikeinfo from "./page/Bikeinfo"
import Addbike from "./page/Addbike"
import Editbike from "./page/Editbike"
import Protecterroute from "./components/Protecterroute"
import Protecterroutelogin from "./components/Protecterroutelogin"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Protecterroutelogin Component={Login} />} />
        <Route path="/bikeinfo" element={<Protecterroute Component={Bikeinfo} />} />
        <Route path="/addbike" element={<Protecterroute Component={Addbike} />} />
        <Route path="/editebike/:id" element={<Protecterroute Component={Editbike} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
