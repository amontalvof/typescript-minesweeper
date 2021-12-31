import getShuffledArray from './getShuffledArray';
import addNumbers from './addNumbers';
import { ICreateBoard } from '../interfaces';
import click from './click';

const createBoard = ({
    grid,
    width,
    squares,
    bombAmount,
    isGameOver,
}: ICreateBoard): void => {
    //get shuffled game array with random bombs
    const shuffledArray: string[] = getShuffledArray({ bombAmount, width });

    for (let i = 0; i < width ** 2; i++) {
        const square = document.createElement('div') as HTMLElement;
        square.setAttribute('id', i.toString());
        square.classList.add(shuffledArray[i]);
        grid.appendChild(square);
        squares.push(square);

        //normal click
        square.addEventListener('click', (event) => {
            click({ square, isGameOver });
        });
    }

    //add numbers
    addNumbers({ squares, width });
};

export default createBoard;
