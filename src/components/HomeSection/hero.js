import React, {useState, useRef,useEffect } from "react";
import Confetti from "react-confetti";
import "./Home.css";

export default function Hero() {
const [height, setHeight] = useState(null);
const [width, setWidth] = useState(null);
const [show,setShow] = useState(false);
const confettiRef = useRef(null);

useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
}, [])

const handleShow = toggle => {
    setShow(toggle);
}
   
        return (
                
                                
                    <div className ="Hero">
                        <div
                            onMouseEnter ={()=> handleShow(true)}
                            onMouseLeave ={()=> handleShow(false)}
                             className = "confetti-wrap">
                            ref={confettiRef}>
                            <Confetti 
                            recycle ={show}
                            numberOfPieces ={80}
                            width ={width}
                            height={height}
                            />
                        </div>
                    </div>
        );
     }