import { Button, Col, Container, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import './MainMenu.css';

const MainMenu = ({ diff, setDiff, startGame }) => {

    const handleToggle = (value) => {
        setDiff(value);
    };

    const handlePlay = () => {
        startGame();
    };

    return (
        <Container id="main-menu-container">
            <Row>
                <Col>
                    <div id='main-menu-text'>
                        <h1 id="title">Animal Memory Game</h1>
                        <span />
                        <h4><strong>Instructions</strong></h4>
                        <p>Welcome to the Animal Memory game!</p>
                        <p>First, select the game difficulty</p>
                        <p>Now press play and click on the animal pictures, but don't click on the same one twice! Try to get a perfect score!</p>
                    </div>
                    <div id="main-menu-buttons">
                        <ToggleButtonGroup type="radio" name="difficulty" defaultValue={diff} onChange={handleToggle}>
                            <ToggleButton variant="secondary" id="tbg-radio-1" value={1}>
                                Easy
                            </ToggleButton>
                            <ToggleButton variant="secondary" id="tbg-radio-2" value={2}>
                                Medium
                            </ToggleButton>
                            <ToggleButton variant="secondary" id="tbg-radio-3" value={3}>
                                Hard
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <Button size="lg" variant="success" onClick={handlePlay}>Play</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MainMenu;