import React, { useState } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical'
import profile from '../assets/profile.jpg'

const About = () => {
    return (
        <Container>
            <Left>
                <h1>Hello,</h1>
                <h2>{''}
                    <Typical
                        steps={[
                            'I am Chuong Truong', 1000,
                            'a CS student at San Jose State University.', 200,
                            'from the Bay Area, California', 1000,
                            "It's Chuong Truong", 1000
                        ]}
                        loop={1}
                        wrapper="b"
                    />
                </h2>
                <p>Welcome to my crib. I am skilled in Full-stack Development</p>
                <p> and interest in Backend, Distributed System and DevOps domain.</p>
            </Left>

            <Right>
                <img src={profile} alt="before COVID-19 :("/>
            </Right>
        </Container>
    )
};

export default About;

const Container = styled.div`
    height: 85vh;
    display: flex;
    align-items: center;
    
    img{
        max-width:35vh;
        height: auto;
        border-radius: 2%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        -webkit-filter: grayscale(50%);
	    filter: grayscale(50%);
	    -webkit-transition: .3s ease-in-out;
	    transition: .3s ease-in-out;
        &:hover{
            -webkit-filter: grayscale(0);
	        filter: grayscale(0);
        }
    }

    h1,h2{
        color: #3C1874;
    }
    h1{
        font-size: 9vh;
        line-height:10vh;
    }
    h2{
        font-size: 3vh;
        line-height: 4rem;  
    }
    p{
        color: #DE354C;
    }
    @media (max-width: 974px){
        height: auto;
        flex-direction: column-reverse;
        img{
            max-width:25vh;
            margin=top: 10vh;
        }
        h1{
        font-size: 50px;
        line-height: 3rem;
        }

        h2{
            font-size: 30px;
            line-height: 4rem;  
        }

        p{
            color: #DE354C;
        }
    }
`;

const Left = styled.div`
    flex: 2;
    flex-direction: column;
   @media (max-width: 974px){
       display: flex;
       align-items:start;
       margin-bottom: 10vh;
    }
`;

const Right = styled.div`
   flex: 1;
   @media (max-width: 974px){
       display: flex;
       align-items:center;
       margin-bottom: vh;
       margin-bottom: 10vh;
    }
`;
