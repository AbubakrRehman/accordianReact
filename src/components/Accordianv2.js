import React, { useState } from 'react';
import "./Accordian.css";

function Accordianv2({ title, content }) {
    const [active, setActive] = useState(false);
    return (
        <li className='accordian__item'>
            <button onClick={() => setActive((prev) => !prev)} className="btn">
                {active ? "-" : "+"}
            </button>
            <div className="ques">{title}</div>
            {active && <div className="ans">{content}</div>}
        </li>
    )
}

export default Accordianv2