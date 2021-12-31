import createBoard from './helpers/createBoard';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid') as HTMLElement;
    const flagsLeft = document.querySelector('#flags-left') as HTMLElement;
    const result = document.querySelector('#result') as HTMLElement;
    let width: number = 10;
    let bombAmount: number = 20;
    let flags: number = 0;
    let squares: HTMLElement[] = [];
    let isGameOver: boolean = false;

    //create Board
    createBoard({ grid, width, squares, bombAmount, isGameOver });
});
