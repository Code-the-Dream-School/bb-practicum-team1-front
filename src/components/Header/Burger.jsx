import React, { useState } from 'react';
// import styled from 'styled-components';
import RightNav from './RightNav';
import "./Burger.scss";

// const StyledBurger = styled.div`
//     width: 2rem;
//     height: 2rem;
//     position: fixed;
//     top: 25px;
//     right: 20px;
    
//     z-index: 20;
//     display: none;

//     @media (max-width: 768px) {
//         display: flex;
//         justify-content: space-around;
//         flex-flow: column nowrap;    }

//     div {
//         width: 2rem;
//         height: 0.25rem;
//         background-color: ${({ open }) => open ? '#ccc' : '#333'};
//         border-radius: 10px;
//         transform-origin: 1px;
//         transition: all 0.3s linear;
//         cursor: pointer;

//         &:nth-child(1) {
//             transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//         }

//         &:nth-child(2) {
//             transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0%)'};
//             opacity: ${({ open }) => open ? 0 : 1};
//         }

//         &:nth-child(3) {
//             transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//         }
//     }
// ` 

const Burger = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className='burger'>
        <div open={open} onClick={() => setOpen(!open)} className={`${open ? 'openClass' : 'closeClass'}`}>
            <div className='burger-layer'/>
            <div className='burger-layer'/>
            <div className='burger-layer'/>
        </div>
        <RightNav open={open} className={`${open ? 'openClass' : 'closeClass'}`}/>
    </div>
  )
}

export default Burger