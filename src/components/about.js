import React, { useState } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical'

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
                <img src="https://www.nicepng.com/png/detail/522-5226533_get-beyond-the-usual-suspects-profile-pic-icon.png" />
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
        max-width:30vh;
        height: auto;
        border-radius: 50%;
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
        flex-direction: column-reverse;
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
   flex: 1;
`;

const Right = styled.div`
   flex: 1;
   @media (max-width: 974px){
       display: flex;
       align-items:center;
    }
`;