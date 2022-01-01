import { state } from '..';

const stopWatch = (): void => {
    const { timer } = state;

    //Define vars to hold "display" value
    let displaySeconds: string = '0';
    let displayMinutes: string = '0';
    let displayHours: string = '0';

    state.seconds++;

    //Logic to determine when to increment next value
    if (state.seconds / 60 === 1) {
        state.seconds = 0;
        state.minutes++;

        if (state.minutes / 60 === 1) {
            state.minutes = 0;
            state.hours++;
        }
    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (state.seconds < 10) {
        displaySeconds = '0' + state.seconds.toString();
    } else {
        displaySeconds = state.seconds.toString();
    }

    if (state.minutes < 10) {
        displayMinutes = '0' + state.minutes.toString();
    } else {
        displayMinutes = state.minutes.toString();
    }

    if (state.hours < 10) {
        displayHours = '0' + state.hours.toString();
    } else {
        displayHours = state.hours.toString();
    }

    //Display updated time values to user
    timer.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
};

export default stopWatch;
