import stopWatch from './stopWatch';
import { state } from '..';

const startStop = (status: string): void => {
    const { clicks } = state;
    if (status === 'started' && clicks === 1) {
        //Start the stopwatch (by calling the setInterval() function)
        state.interval = window.setInterval(stopWatch, 1000);
    }
    if (status === 'stopped') {
        window.clearInterval(state.interval);
    }
};

export default startStop;
