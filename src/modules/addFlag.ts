import { state } from '..';
import checkForWin from './checkForWin';

//add Flag with right click
const addFlag = (square: HTMLElement) => {
    const { isGameOver, flags, bombAmount } = state;
    const remainingFlags = (bombAmount - flags - 1).toString();
    if (isGameOver) return;
    if (!square.classList.contains('checked') && flags < bombAmount) {
        if (!square.classList.contains('flag')) {
            square.classList.add('flag');
            square.innerHTML = ' 🚩';
            state.flags++;
            state.flagsLeft.innerHTML = remainingFlags;
            checkForWin();
        } else {
            square.classList.remove('flag');
            square.innerHTML = '';
            state.flags--;
            state.flagsLeft.innerHTML = remainingFlags;
        }
    }
};

export default addFlag;
