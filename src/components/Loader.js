import { React, useEffect, useRef, useState } from 'react';
import './Loader.css';
export const Loader = (props) => {
    const progressBar = useRef();
    const [progressBarLength, setProgressBarLength] = useState(106.1258544921875);
    useEffect(() => {
        setProgressBarLength(progressBar.current.getTotalLength());
    }, []) 
    return <div>
        {props.initialLoad != undefined && 
        <svg width="80" height="70" viewBox="-5 0 50 50">
            <circle 
                className="circularLoaderBg" 
                cx="25" 
                cy="25" 
                r="15" 
                strokeWidth="2px">
            </circle>
            <circle transform="rotate(90 25 25)" ref={progressBar} className="circularLoaderFg"
                cx="25"
                cy="25"
                r="17"
                strokeLinecap="round"
                strokeDasharray={progressBarLength}
                strokeDashoffset={(progressBarLength - ((progressBarLength*props.initialLoad)/100))}
                strokeWidth="5px">
            </circle>
            <circle 
                className="circularLoaderBg" 
                cx="25" 
                cy="25" 
                r="20" 
                strokeWidth="2px">
            </circle>
            <text className="circularLoaderText" x="25" y="25" dy=".4em" textAnchor="middle"> {props.initialLoad}%</text>
        </svg>
        }</div>
}

