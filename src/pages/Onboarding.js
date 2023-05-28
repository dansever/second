// import React, { useState } from 'react';
// import { useNavigate  } from 'react-router-dom';
// import styled from "styled-components";
// import planet from "../assets/images/planet.png"
// import unique from "../assets/images/unique.png"
// import friends from "../assets/images/friends.png"
// import lightbulb from "../assets/images/lightbulb.png"
// import "../styles/Login.css"
// import {Button, Input} from "antd";
//
// const Picture = styled.img`
//     width: 300px;
//     height: 100%;
//     object-fit: cover;
// `;
// const Container = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
// `;
//
// const Div = styled.div`
//     position: absolute;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;
//
// export const Onboarding = () => {
//     const navigate = useNavigate();
//     const [step, setStep] = useState(1);
//     const handleSignup = () => {
//         // Redirect to signup page
//         navigate("/Signup");
//     };
//
//     const handleLogin = () => {
//         // Redirect to signup page
//         navigate("/Login");
//     }
//
//     const handleNext = () => {
//         setStep(step + 1);
//     };
//
//     const handlePrevious = () => {
//         setStep(step - 1);
//     };
//
//     return (
//         <div>
//             {step === 1 && (
//                 <Container>
//                     <Div>
//                         <h2>Elevate Your Wardrobe with Unique Second-Hand Finds</h2>
//                         <Picture src={unique}/>
//                         <button
//                             className={"submit-button"}
//                             onClick={handleNext}>
//                             Next
//                         </button>
//                     </Div>
//                 </Container>
//             )}
//             {step === 2 && (
//                 <Container>
//                     <Div>
//                         <h2>Make a Positive Environmental Change Through Fashion</h2>
//                         <Picture src={planet}/>
//                         <button
//                             className={"submit-button"}
//                             onClick={handleNext}>
//                             Next
//                         </button>
//                     </Div>
//                 </Container>
//             )}
//             {step === 3 && (
//                 <Container>
//                     <Div>
//                         <h2>Give New Life to Your Clothing by Sharing Them with Friends, Earning Tokens Along the Way</h2>
//                         <Picture src={friends}/>
//                         <button
//                             className={"submit-button"}
//                             onClick={handleNext}>
//                             Next
//                         </button>
//                     </Div>
//                 </Container>
//             )}
//             {step === 4 && (
//                 <Container>
//                     <Div>
//                         <h2>Start Your Journey in Second Right Now!</h2>
//                         <Picture src={lightbulb}/>
//                         <button className={"submit-button"}
//                                 onClick={handleSignup}>
//                             Sign Up
//                         </button>
//                         <div className={"new-user"}>
//                             <p>Already have an account?</p>
//                             <Button
//                                 className={"sign-up-button"}
//                                 onClick={handleLogin}>
//                                 Login
//                             </Button>
//                         </div>
//                     </Div>
//                 </Container>
//             )}
//         </div>
//     );
// };
//
// export default Onboarding;
