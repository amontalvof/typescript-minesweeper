import click from './click';
import { state } from '..';
import { ICheckSquareParams } from '../interfaces';

//check neighboring squares once square is clicked
const checkSquare = ({ square, currentId }: ICheckSquareParams) => {
    const { width, squares } = state;
    const isLeftEdge = currentId % width === 0;
    const isRightEdge = currentId % width === width - 1;

    setTimeout(() => {
        if (currentId > 0 && !isLeftEdge) {
            const newId = squares[currentId - 1].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId > 9 && !isRightEdge) {
            const newId = squares[currentId + 1 - width].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId > 10) {
            const newId = squares[currentId - width].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId > 11 && !isLeftEdge) {
            const newId = squares[currentId - 1 - width].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId < 98 && !isRightEdge) {
            const newId = squares[currentId + 1].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId < 90 && !isLeftEdge) {
            const newId = squares[currentId - 1 + width].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId < 88 && !isRightEdge) {
            const newId = squares[currentId + 1 + width].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
        if (currentId < 89) {
            const newId = squares[currentId + width].id;
            const newSquare = document.getElementById(newId) as HTMLElement;
            click(newSquare);
        }
    }, 10);
};

export default checkSquare;
