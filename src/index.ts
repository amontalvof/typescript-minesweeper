import getShuffledArray from './helpers/getShuffledArray';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid') as HTMLElement;
    let width: number = 10;
    let squares: HTMLElement[] = [];
    let bombAmount: number = 20;

    //create Board
    const createBoard = () => {
        //get shuffled game array with random bombs
        const shuffledArray: string[] = getShuffledArray({ bombAmount, width });

        for (let i = 0; i < width ** 2; i++) {
            const square = document.createElement('div') as HTMLElement;
            square.setAttribute('id', i.toString());
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);
        }
    };
    createBoard();
});
