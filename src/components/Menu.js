import React from 'react'
import { Data } from '../helpers/Data'
import {MenuItem} from './MenuItem'
import "../styles/Menu.css"


export const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Burgers</h1>
            <div className='menuList'>
                {Data.map((menuItem, key) => {
                    return <MenuItem
                        name={menuItem.name}
                        image={menuItem.image}
                        content={menuItem.content}
                        price={menuItem.price}
                        key={key}
                    />
                })}
            </div>
        </div>
    )
}
