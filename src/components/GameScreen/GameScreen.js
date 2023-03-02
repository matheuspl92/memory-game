import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import GameBoard from "../GameBoard/GameBoard";

const GameScreen = ({ endGame }) => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleReturn = () => {
        endGame();
    }

    return (
        <Container>
            <Col>
                <Row className="justify-content-md-center">
                    <h5>High Score: 10</h5>
                    <h3>Score: 2</h3>
                </Row>
                <Row>
                    <GameBoard />
                </Row>
                <Row>
                    <Button onClick={handleReturn}>Return to Main Menu</Button>
                </Row>
            </Col>
        </Container>
    );
};

export default GameScreen;