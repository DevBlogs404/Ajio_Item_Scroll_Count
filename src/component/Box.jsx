import React from 'react'
import '../pages/page.css'
import test from '../assets/test.png'

export default function Box() {
    return (
        <div className="boxes" ref={ref}>
            <div className="left_Box">
                <img src={test} alt="item" className='item_image' />
                <div className='item_Info'>
                    <h3 className='item_title'>Jeans</h3>
                    <p className='item_description'>straight fit blue jeans without anythign</p>
                    <span>Rs. 430 <span className='item_originalPrice'>Rs. 1499</span></span>
                    <p>offer price Rs. 430</p>
                </div>
            </div>
            <div className="right_Box">
                <img src={test} alt="item" className='item_image' />
                <div className='item_Info'>
                    <h3 className='item_title'>Jeans</h3>
                    <p className='item_description'>straight fit blue jeans without anythign</p>
                    <span>Rs. 430 <span className='item_originalPrice'>Rs. 1499</span></span>
                    <p>offer price Rs. 430</p>
                </div>
            </div>
        </div>
    )
}
