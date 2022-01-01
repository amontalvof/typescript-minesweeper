import { state } from '..';
import startStop from './startStop';

//game over
const gameOver = (square: HTMLElement): void => {
    const { result, squares } = state;
    startStop('stopped');
    result.innerHTML = 'BOOM! Game Over!';
    state.isGameOver = true;
    //show ALL the bombs
    squares.forEach((square) => {
        if (square.classList.contains('bomb')) {
            square.innerHTML = '💣';
            square.classList.remove('bomb');
            square.classList.add('checked');
        }
    });
};

export default gameOver;
