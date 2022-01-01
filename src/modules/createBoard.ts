import getShuffledArray from './getShuffledArray';
import addNumbers from './addNumbers';
import addFlag from './addFlag';
import { ICreateBoard } from '../interfaces';
import click from './click';

//create Board
const createBoard = ({ grid, width, squares }: ICreateBoard): void => {
    const shuffledArray: string[] = getShuffledArray(width);

    for (let i = 0; i < width ** 2; i++) {
        const square = document.createElement('div') as HTMLElement;
        square.setAttribute('id', i.toString());
        square.classList.add(shuffledArray[i]);
        grid.appendChild(square);
        squares.push(square);

        //normal click
        square.addEventListener('click', (event) => {
            click(square);
        });

        //ctrl and left click
        square.oncontextmenu = (event) => {
            event.preventDefault();
            addFlag(square);
        };
    }

    //add numbers
    addNumbers(squares);
};

export default createBoard;
