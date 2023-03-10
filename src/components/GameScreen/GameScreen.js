import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import GameBoard from "../GameBoard/GameBoard";
import "./GameScreen.css";

const GameScreen = ({ diff, endGame }) => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [hasPerfectScore, setPerfectScore] = useState(false);

    const handleReturn = () => {
        endGame();
    }

    const scorePoint = () => {
        setScore(score + 1);
    }

    const clearScore = () => {
        setScore(0);
    }

    useEffect(() => {
        if (highScore < score) setHighScore(score);
        if (score === (diff * 5)) setPerfectScore(true);
    }, [score, highScore, diff]);

    return (
        <Container id="game-screen-container">
            <Col>
                <Row>
                    <div id="game-screen-score">
                        <h5>High Score: {highScore}{(hasPerfectScore) ? ' - Perfect' : null}</h5>
                        <h3>Score: {score}</h3>
                    </div>
                </Row>
                <Row>
                    <GameBoard diff={diff} scorePoint={scorePoint} clearScore={clearScore} />
                </Row>
                <Row>
                    <Button variant="success" onClick={handleReturn}>Return to Main Menu</Button>
                </Row>
            </Col>
        </Container>
    );
};

export default GameScreen;