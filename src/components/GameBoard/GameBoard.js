import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import getImagesArray from "../../aux_methods/getImagesArray";
import shuffleArray from "../../aux_methods/shuffleArray";
import "./GameBoard.css";

const GameBoard = ({ diff, scorePoint, clearScore }) => {
    const [images, setImages] = useState(getImagesArray(diff));
    const [imagesClicked, setImagesClicked] = useState([]);

    const handleClick = (event) => {
        const value = event.target.id;
        if (imagesClicked.includes(value)) {
            setImagesClicked([]);
            clearScore();
            console.log('lost');
        } else {
            setImagesClicked(imagesClicked.concat([value]));
            scorePoint();
            console.log('pushed ' + value);
        }
        setImages(shuffleArray(images));
    }

    return (
        <Container>
            <div id="gameboard-gallery">
                {images.map(({ title, fileName }) => {
                    return <Image className="animal-img" roundedCircle key={title} id={title} src={`images/${fileName}.jpg`} height={150} width={150} onClick={handleClick} />
                })}
            </div>
        </Container>
    )
};

export default GameBoard;
