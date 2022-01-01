import { state } from '..';

//get shuffled game array with random bombs
const getShuffledArray = (width: number): string[] => {
    const { bombAmount } = state;
    const bombsArray: string[] = Array(bombAmount).fill('bomb');
    const emptyArray: string[] = Array(width ** 2 - bombAmount).fill('valid');
    const gameArray: string[] = emptyArray.concat(bombsArray);
    return gameArray.sort(() => Math.random() - 0.5);
};

export default getShuffledArray;
