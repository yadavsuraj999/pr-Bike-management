import { Component, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Protecterroute = ({Component}) => {

    const navigate = useNavigate()

    useEffect(() => {
        const login = JSON.parse(localStorage.getItem("isloggedin")) || false
        if (!login) {
            navigate("/login")
        }
    }, [])

    return (
        <Component/>
    )
}

export default Protecterroute