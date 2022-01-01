export interface ICreateBoard {
    grid: HTMLElement;
    width: number;
    squares: HTMLElement[];
}

export interface ICheckSquareParams {
    square: HTMLElement;
    currentId: number;
}

export interface IState {
    width: number;
    bombAmount: number;
    flags: number;
    squares: HTMLElement[];
    isGameOver: boolean;
    grid: HTMLElement;
    flagsLeft: HTMLElement;
    result: HTMLElement;
    timer: HTMLElement;
    restartButton: HTMLElement;
    interval: any;
    clicks: number;
    seconds: number;
    minutes: number;
    hours: number;
}
