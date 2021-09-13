import React, {useState, useEffect} from "react";
import { ScoresList, ScoreLI } from '../styled/HighScores';
import { StyledTitle } from '../styled/Random';

export default function HighScores(){
    const [highScores, setHighScores] = useState([]);
    useEffect(() => {
         const loadHighScores = async() => {
             const res = await fetch('/.netlify/functions/getHighScores');
             const scores = await res.json();
             setHighScores(scores);
         };
         loadHighScores();
    }, []);
    return (
        <div>
            <StyledTitle>High Scores</StyledTitle>
            <ScoresList>
                {highScores.map((score, index) => (
                    <ScoreLI key={score.id}>
                        {index + 1}. {score.fields.player} - {score.fields.score}</ScoreLI>
                ))}
            </ScoresList>
        </div>
        );
}