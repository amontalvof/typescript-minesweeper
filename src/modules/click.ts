import checkSquare from './checkSquare';
import gameOver from './gameOver';
import startStop from './startStop';
import { state } from '..';

//click on square actions
const click = (square: HTMLElement): void => {
    const { isGameOver } = state;
    state.clicks++;
    startStop('started');
    let currentId = Number(square.id);
    if (isGameOver) return;
    if (
        square.classList.contains('checked') ||
        square.classList.contains('flag')
    )
        return;
    if (square.classList.contains('bomb')) {
        gameOver(square);
    } else {
        let total = Number(square.getAttribute('data'));
        if (total != 0) {
            square.classList.add('checked');
            if (total == 1) square.classList.add('one');
            if (total == 2) square.classList.add('two');
            if (total == 3) square.classList.add('three');
            if (total == 4) square.classList.add('four');
            square.innerHTML = total.toString();
            return;
        }
        checkSquare({ square, currentId });
    }
    square.classList.add('checked');
};

export default click;
