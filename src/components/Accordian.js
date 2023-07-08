import React from 'react';
import "./Accordian.css";

function Accordian({ title,content }) {
    const activeClassHandler = (e) => {
        e.target.parentNode.classList.toggle("active");
    }

    return (
        <li className='accordian__item'>
            <button onClick={activeClassHandler} className="btn">
                <span className='plus'>+</span>
                <span className='minus'>-</span>
            </button>
            <div className="ques">{title}</div>
            <div className="ans">{content}</div>
        </li>
    )
}

export default Accordian