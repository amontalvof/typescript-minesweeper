import createBoard from './modules/createBoard';
import restart from './modules/restart';
import { IState } from './interfaces';
import './styles.css';

export const state: IState = {
    width: 10,
    bombAmount: 20,
    flags: 0,
    squares: [],
    isGameOver: false,
    interval: null,
    clicks: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    grid: document.querySelector('.grid') as HTMLElement,
    flagsLeft: document.querySelector('#flags-left') as HTMLElement,
    result: document.querySelector('#result') as HTMLElement,
    timer: document.getElementById('display') as HTMLElement,
    restartButton: document.querySelector('.btn') as HTMLElement,
};

document.addEventListener('DOMContentLoaded', () => {
    const { grid, width, squares, restartButton } = state;
    restartButton.addEventListener('click', restart);
    createBoard({ grid, width, squares });
});
