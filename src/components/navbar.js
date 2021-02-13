import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import Ctlogo from '../assets/Logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <LogoContainer>
                <Link onClick={(e) => { setIsOpen(!isOpen);}} to="/about">
                    <img src={Ctlogo} />
                </Link>
            </LogoContainer>
            <Hamburger onClick={(e) => {
                setIsOpen(!isOpen);
            }}>
                <IconWrapper>
                    <span className={isOpen ? "bar1-change" : ""} />
                    <span className={isOpen ? "bar2-change" : ""} />
                    <span className={isOpen ? "bar3-change" : ""} />
                </IconWrapper>
            </Hamburger>
            <NavLinks className="nav-links" isOpen={isOpen}>
                <li>
                    <Link onClick={(e) => { setIsOpen(!isOpen);}} to="/about">about</Link>
                </li>
                <li>
                    <Link onClick={(e) => { setIsOpen(!isOpen);}} to="/projects">projects</Link>
                </li>
                <li>
                    <Link onClick={(e) => { setIsOpen(!isOpen);}} to="/">resume</Link>
                </li>
                <li>
                    <Link onClick={(e) => { setIsOpen(!isOpen);}} to="/">experiences</Link>
                </li>
                <li>
                    <Link onClick={(e) => { setIsOpen(!isOpen);}} to="/">contact</Link>
                </li>
            </NavLinks>
        </Nav>
    )
};

export default Navbar;


const Nav = styled.div`
    display: flex;
    height: 10vh;
    align-items: center;
    position: relative;
`;


const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    img {
        height: 3rem;
        cursor: pointer;
    }
`;

const Hamburger = styled.div`
    position: absolute;
    right: 0%;
    top: 50%
    transform: translate(-0%, -50%);
    z-index: 4;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media(max-width: 974px){
        span {
        width: 30px;
        height: 5px;
        background-color: #333;
        margin: 3px;
        transition: 0.4s;
        }
    }

    .bar1-change {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }

    .bar2-change {opacity: 0;}

    .bar3-change {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`;


const NavLinks = styled.ul`
    display: flex;
    flex: 2;
    justify-content: space-around;
    
    li {
        list-style: none;
        padding: 10px;
        font-size: 18px;
        font-weight: bold;
        position: relative;
        
        a {
            text-decoration: none;
            &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 0;
                bottom: 0;
                left: 0;
                background-color: #FFF;
                visibility: hidden;
                transition: all 0.3s ease-in;
            }

            &:hover:before{
                visibility: visible;
                height: 3px;
                background: #932432;
            }
        }
    }

    @media (max-width: 974px){
        display: ${({isOpen}) => isOpen ? 'flex':'none'};
        transition: display 2s ease-out;
        background-color: coral;
        position:fixed;
        flex-direction: column;
        padding: 5px 0;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        align-items: center;
        z-index: 3
    }
`;




