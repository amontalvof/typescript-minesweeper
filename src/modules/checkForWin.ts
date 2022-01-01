import { state } from '..';
import startStop from './startStop';

//check for win
const checkForWin = () => {
    const { squares, bombAmount, result } = state;
    let matches = 0;

    for (let i = 0; i < squares.length; i++) {
        if (
            squares[i].classList.contains('flag') &&
            squares[i].classList.contains('bomb')
        ) {
            matches++;
        }
        if (matches === bombAmount) {
            startStop('stopped');
            result.innerHTML = 'YOU WIN!';
            state.isGameOver = true;
        }
    }
};

export default checkForWin;
