import { List } from '@mui/material'
import React from 'react'
import BannerImage from '../assets/bannerNew.jpg'
import '../styles/Home.css'


export const Home = () => {
    return (
        <div className='mainPage' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='order'>
                <List to="/menu">
                    <button>Take Order</button>
                </List>
            </div>
        </div>
    )
}
