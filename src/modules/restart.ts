import { state } from '..';
import createBoard from './createBoard';
import startStop from './startStop';

const restart = () => {
    state.width = 10;
    state.bombAmount = 20;
    state.flags = 0;
    state.squares = [];
    state.isGameOver = false;
    state.clicks = 0;
    state.seconds = 0;
    state.minutes = 0;
    state.hours = 0;
    state.grid.innerHTML = '';
    state.flagsLeft.innerHTML = '';
    state.result.innerHTML = '';
    state.timer.innerHTML = '00:00:00';

    const { grid, width, squares } = state;
    startStop('stopped');
    createBoard({ grid, width, squares });
};

export default restart;
