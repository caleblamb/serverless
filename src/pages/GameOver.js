import React, {useEffect, useState} from "react";
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar'

export default function GameOver({history}){
    const [score] = useScore();
    const [scoreMessage, setScoreMessage] = useState("");
    if(score === -1) {
        history.push('/')
    } 
    
    useEffect(() => {
        const saveHighScore = async()=>{
            const options ={
                method: "POST",
                body: JSON.stringify( {name: "Caleb", score})
            }
            const res = await fetch('/.netlify/functions/saveHighScore', options)
            const data = await res.json();
        }
        saveHighScore();
    }, []);
    return (
        <div>
            <h1>GameOver</h1>
            <p>{score}</p>
            <StyledLink to="/">Go Home</StyledLink>
            <StyledLink to="/game">Play Again?</StyledLink>
        </div>
        );
}