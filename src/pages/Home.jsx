import React from 'react'
import Page from './Page'
import Header from '../component/Header'
import './home.css'

const Home = () => {
    return (
        <main className='home_Wrapper'>
            <Header />
            <Page />
        </main>
    )
}

export default Home