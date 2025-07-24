import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protecterroutelogin = ({ Component }) => {

    const naviget = useNavigate()

    const islogin = useSelector((state) => state.bikemanage.islogin)

    useEffect(() => {
        if (islogin) {
            naviget("/bikeinfo")
        }
    }, [])

    return (
        <Component />
    )
}

export default Protecterroutelogin