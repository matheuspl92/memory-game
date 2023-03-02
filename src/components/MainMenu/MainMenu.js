import { Button, Col, Container, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const MainMenu = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Animal Memory</h1>
                    <h3>Instructions</h3>
                    <p>Welcome to the Animal Memory game!</p>
                    <p>First, select the game difficulty</p>
                    <p>Now press play and click on the animal pictures, but don't click on the same one twice! Try to get a perfect score!</p>
                </Col>
                <Col>
                    <ToggleButtonGroup type="radio" name="difficulty" defaultValue={1}>
                        <ToggleButton id="tbg-radio-1" value={1}>
                            Easy
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={2}>
                            Medium
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3}>
                            Hard
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Button>Play</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default MainMenu;