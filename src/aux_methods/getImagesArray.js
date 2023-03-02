import shuffleArray from "./shuffleArray";

const getImagesArray = (diff) => {
    const images = [
        {
            title: 'Bear',
            fileName: 'bear01'
        },
        {
            title: 'Bunny',
            fileName: 'bunny01'
        },
        {
            title: 'Cat',
            fileName: 'cat01'
        },
        {
            title: 'Chick',
            fileName: 'chick01'
        },
        {
            title: 'Cow',
            fileName: 'cow01'
        },
        {
            title: 'Dolphin',
            fileName: 'dolphin01'
        },
        {
            title: 'Duck',
            fileName: 'duck01'
        },
        {
            title: 'Giraffe',
            fileName: 'giraffe01'
        },
        {
            title: 'Lion',
            fileName: 'lion01'
        },
        {
            title: 'Monkey',
            fileName: 'monkey01'
        },
        {
            title: 'Parrot',
            fileName: 'parrot01'
        },
        {
            title: 'Penguin',
            fileName: 'penguin01'
        },
        {
            title: 'Puppies',
            fileName: 'puppies01'
        },
        {
            title: 'Sheep',
            fileName: 'sheep01'
        },
        {
            title: 'Squirrel',
            fileName: 'squirrel01'
        },
    ]

    const imagesToRemove = 15 - (diff * 5);
    const removedArray = [...images];

    for (let i = 0; i < imagesToRemove; i += 1) {
        const indexToRemove = Math.floor(Math.random() * removedArray.length)
        removedArray.splice(indexToRemove, 1);
    }

    return shuffleArray(removedArray);

}

export default getImagesArray;