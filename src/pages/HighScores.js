import React, {useState, useEffect} from "react";
import { ScoresList, ScoreLI } from '../styled/HighScores';

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
            <h1>High Scores</h1>
            <ScoresList>
                {highScores.map((score) => (
                    <ScoreLI key={score.id}>{score.fields.player} - {score.fields.score}</ScoreLI>
                ))}
            </ScoresList>
        </div>
        );
}