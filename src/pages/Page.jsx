import React, { useRef, useEffect, useContext, useState } from 'react'
import './page.css'
// import Box from '../component/Box'
import test from '../assets/test.png'
import { UserContext } from '../context/context'

const Page = () => {
    const { state, dispatch } = useContext(UserContext)
    const boxRef = useRef([])

    const handleIncrement = () => {
        dispatch({ type: "Increment_Count" });
    };

    const handleDecrement = () => {
        dispatch({ type: "Decrement_Count" });
    };

    // Intersection Observer callback
    const handleIntersect = (entry, index) => {
        if (!entry.isIntersecting) {
            if (entry.boundingClientRect.top > 0) {
                handleDecrement();
            } else {
                handleIncrement();
            }
        }
    };


    useEffect(() => {
        const observerOptions = {
            threshold: 0.5, // Adjust this value as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                handleIntersect(entry, index);
            });
        }, observerOptions);

        boxRef.current.forEach((boxRef) => {
            observer.observe(boxRef);
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='page_Wrapper'>
            {Array.from({ length: 12 }, (_, index) => (
                <div className="boxes" key={index} ref={(el) => (boxRef.current[index] = el)}>
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
            ))}
        </div>
    )
}

export default Page