import React, { useEffect, useRef } from 'react'
import { StyledDiv } from '../styled/app'

export default function Signup(props) {

    const leftSide = useRef(null);


    useEffect(() => {
        const leftSideHeight = leftSide.current.clientHeight
        const rightSide = document.querySelector(".right");
        rightSide.style.height = `${leftSideHeight + 5}px`;
    }, [])

    return (
        <StyledDiv isLeft>
            <div className="container">
                <div className="wrapper">
                    {/* left side */}
                    <div className="left" ref={leftSide}>
                        <div className="left-wrapper">
                            <form className="form">
                                <h1>Sign Up</h1>
                                <div>
                                    <input className="name" type="text" placeholder="Name"/>
                                    <br />
                                    <input className="email" type="email" placeholder="Email" />
                                    <br />
                                    <input className="password" type="password" placeholder="Password" />
                                    <br />
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="right">
                        <video autoPlay>
                            <source src="https://storage.coverr.co/videos/Love-Coding?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg0MzEyODIyfQ.XVLUij_kU43t0uoKwYV5ZNVXWlbXKK5igpicSjSpYMY" />
                        </video>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}
