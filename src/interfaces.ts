export interface IAddNumbersParams {
    squares: HTMLElement[];
    width: number;
}

export interface IGetShuffledArrayParams {
    bombAmount: number;
    width: number;
}

export interface ICreateBoard extends IGetShuffledArrayParams {
    squares: HTMLElement[];
    grid: HTMLElement;
    isGameOver: boolean;
}

export interface IClickParams {
    square: HTMLElement;
    isGameOver: boolean;
}
