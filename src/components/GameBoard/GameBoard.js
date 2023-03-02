import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import getImagesArray from "../../aux_methods/getImagesArray";
import shuffleArray from "../../aux_methods/shuffleArray";

const GameBoard = ({ diff }) => {
    const [images, setImages] = useState(getImagesArray(diff));
    const [imagesClicked, setImagesClicked] = useState([]);

    const handleClick = (event) => {
        const value = event.target.id;
        if(imagesClicked.includes(value)) {
            setImagesClicked([]);
            console.log('lost');
        } else {
            setImagesClicked(imagesClicked.concat([value]));
            console.log('pushed ' + value);
        }
        setImages(shuffleArray(images));
    }

    return (
        <Container>
            {images.map(({ title, fileName }) => {
                return <Image roundedCircle key={title} id={title} src={`images/${fileName}.jpg`} height={250} width={250} onClick={handleClick} />
            })}
        </Container>
    )
};

export default GameBoard;