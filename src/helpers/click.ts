import { IClickParams } from '../interfaces';

const click = ({ square, isGameOver }: IClickParams): void => {
    let currentId = square.id;
    if (isGameOver) return;
    if (
        square.classList.contains('checked') ||
        square.classList.contains('flag')
    )
        return;
    if (square.classList.contains('bomb')) {
        // gameOver(square);
        console.log('gameOver');
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
        // checkSquare(square, currentId);
        console.log('checkSquare');
    }
    square.classList.add('checked');
};

export default click;
