import second from "../assets/images/positiveinfluence.png"
import first from "../assets/images/first.png"
import third from "../assets/images/third.png"
import  co2 from "../assets/images/co2.png"
import  last from "../assets/images/last.png"

import Colors from "../color.js";

import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from "styled-components";
import planet from "../assets/images/planet.png"
import unique from "../assets/images/unique.png"
import friends from "../assets/images/friends.png"
import lightbulb from "../assets/images/lightbulb.png"
import "../styles/Login.css"
import {Button} from "antd";
import {ButtonStyle} from "../components/Button";


const Picture = styled.img`
    width: 300px;
    height: 100%;
    object-fit: cover;
`;
const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Onboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const handleSignup = () => {
        // Redirect to signup page
        navigate("/JoinTheCommunity");
    };

    const handleLogin = () => {
        // Redirect to signup page
        navigate("/Login");
    }

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {step === 1 && (
                 <Container>
                     <Div>
                         <h2 style={{ color:Colors.green}} >Elevate your wardrobe with unique second-hand finds</h2>
                         <Picture src={first}/>
                         <ButtonStyle
                             className={"submit-button"}
                             onClick={handleNext}>
                             Next
                         </ButtonStyle>
                         <br/>
                         <div className={"new-user"}>
                             <p>Already have an account?</p>
                             <Button
                                 className={"sign-up-button"}
                                 onClick={handleLogin}>
                                 Login
                             </Button>
                         </div>
                     </Div>
                 </Container>
             )}
             {step === 2 && (
                 <Container>
                     <Div>
                         <h2 style={{ color:Colors.green}}>Say NO to fast fashion and create a positive environmental impact</h2>
                         <Picture src={second}/>
                         <ButtonStyle
                             className={"submit-button"}
                             onClick={handleNext}>
                             Next
                         </ButtonStyle>
                         <br/>
                         <div className={"new-user"}>
                             <p>Already have an account?</p>
                             <button
                                 className={"sign-up-button"}
                                 onClick={handleLogin}>
                                 Login
                             </button>
                         </div>
                     </Div>
                 </Container>
             )}
             {step === 3 && (
                 <Container>
                     <Div>
                         <h2 style={{ color:Colors.green}}>Discover how much carbon emission you've reduced
                             by giving new life to your old clothes!</h2>
                         <Picture src={co2}/>
                         <ButtonStyle
                             className={"submit-button"}
                             onClick={handleNext}>
                             Next
                         </ButtonStyle>
                         <br/>
                         <div className={"new-user"}>
                             <p>Already have an account?</p>
                             <button
                                 className={"sign-up-button"}
                                 onClick={handleLogin}>
                                 Login
                             </button>
                         </div>
                     </Div>
                 </Container>
             )}
             {step === 4 && (
                 <Container>
                     <Div>
                         <h2 style={{ color:Colors.green}}>Invite your friends & swap clothes with them</h2>
                         <Picture src={third}/>
                         <ButtonStyle
                             className={"submit-button"}
                             onClick={handleNext}>
                             Next
                         </ButtonStyle>
                         <br/>
                         <div className={"new-user"}>
                             <p>Already have an account?</p>
                             <button
                                 className={"sign-up-button"}
                                 onClick={handleLogin}>
                                 Login
                             </button>
                         </div>
                     </Div>
                 </Container>
             )}
             {step === 5 && (
             <Container>
                 <Div>
                     <h2 style={{ color:Colors.green}}>Let's get started! Sign up to join the Second community</h2>
                     <Picture src={last}/>
                     <ButtonStyle className={"submit-button"}
                                  onClick={handleSignup}>
                         Sign Up
                     </ButtonStyle>
                     <br/>
                     <div className={"new-user"}>
                         <p>Already have an account?</p>
                         <Button
                            className={"sign-up-button"}
                             onClick={handleLogin}>
                            Login
                         </Button>
                     </div>
                 </Div>
             </Container>
         )}
     </div>
    );
};

export default Onboarding;