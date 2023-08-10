import React, { useContext, useState } from 'react'
import './header.css'
import { UserContext } from '../context/context'

export default function Header() {
    const { state } = useContext(UserContext)
    const count = state.itemCount
    return (
        <div className='header_Wrapper'>
            {count * 2 + 4} products
        </div>
    )
}
