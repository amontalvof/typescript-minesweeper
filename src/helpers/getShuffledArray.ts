interface IParams {
    bombAmount: number;
    width: number;
}
const getShuffledArray = ({ bombAmount, width }: IParams): string[] => {
    const bombsArray: string[] = Array(bombAmount).fill('bomb');
    const emptyArray: string[] = Array(width ** 2 - bombAmount).fill('valid');
    const gameArray: string[] = emptyArray.concat(bombsArray);
    return gameArray.sort(() => Math.random() - 0.5);
};

export default getShuffledArray;
