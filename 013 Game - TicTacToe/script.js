"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autoBind(_, _2, propertyDescriptor) {
    const origConstructor = propertyDescriptor.value;
    const adjConstructor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = origConstructor.bind(this);
            return boundFn;
        }
    };
    return adjConstructor;
}
// [1,2,3]
// [4,5,6]
// [7,8,9]
// horizontal winning conditions
// [1,2,3]
// [4,5,6]
// [7,8,9]
// vertical winning conditions
// [1,4,7]
// [2,5,8]
// [7,8,9]
// diagonal winning conditions
// [1,5,9]
// [7,5,3]
class TicTacToe {
    constructor() {
        this.winningConditions = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [7, 8, 9],
            [1, 5, 9],
            [7, 5, 3],
        ];
        this.playerXstatus = [];
        this.playerOstatus = [];
        this.clickedBoxes = [];
        this.CurrentPlayer = 'O';
        this.tileContainer = document.querySelector('.tileContainer');
        this.winnertText = document.querySelector('.Winner');
        this.getLocalStorage();
        this.reRenderXnO();
        this.winnertText.textContent = `${this.CurrentPlayer}'s Turn`;
        this.tileContainer.addEventListener('click', this.clickHandler);
    }
    clickHandler(e) {
        const targetBox = e.target;
        const tileID = Number(targetBox.getAttribute('data-tileid'));
        // guard clause for clicking the same
        if (this.clickedBoxes.includes(tileID))
            return;
        targetBox.textContent = this.CurrentPlayer;
        // make the box not clickable - update clickedboxes array
        targetBox.style.cursor = 'not-allowed';
        this.clickedBoxes.push(tileID);
        // update playersArray - reverse current player 
        if (this.CurrentPlayer == 'O') {
            this.playerOstatus.push(tileID);
            // console.log('O status -'+this.playerOstatus)
            targetBox.style.color = '#ff0000ce';
            // Check if O won
            this.CurrentPlayer = 'X';
        }
        else {
            this.playerXstatus.push(Number(tileID));
            // console.log('X status -'+this.playerOstatus)
            targetBox.style.color = '#0091ffce';
            // Check if O won
            this.CurrentPlayer = 'O';
        }
        // Check Status
        this.checkStatus();
        this.setLocalStorage();
    }
    checkStatus() {
        if (this.winningConditions.some(y => y.every(x => this.playerOstatus.includes(x)))) {
            // player O won
            // console.log('player O won')
            this.winnertText.innerHTML = 'Player O won!!! <br/> Game reset!...';
            this.resetGame();
            return;
        }
        if (this.winningConditions.some(y => y.every(x => this.playerXstatus.includes(x)))) {
            // player X won
            // console.log('player X won')
            this.winnertText.innerHTML = 'Player X won!!! <br/> Game reset!...';
            this.resetGame();
            return;
        }
        if ((this.playerOstatus.length + this.playerXstatus.length) == 9) {
            // console.log('Draw')
            this.winnertText.innerHTML = 'Draw!!! <br/> Game reset!...';
            this.resetGame();
            return;
        }
        this.winnertText.textContent = `${this.CurrentPlayer}'s Turn`;
    }
    resetGame() {
        this.playerXstatus = [];
        this.playerOstatus = [];
        this.clickedBoxes = [];
        this.CurrentPlayer = 'O';
        this.tileContainer.querySelectorAll('.tile').forEach((x) => {
            x.textContent = '';
            x.style.cursor = 'pointer';
        });
        setTimeout(() => {
            this.winnertText.innerHTML = '';
            this.winnertText.textContent = `${this.CurrentPlayer}'s Turn`;
        }, 2000);
    }
    setLocalStorage() {
        const gameStatus = {
            pX: this.playerXstatus,
            pO: this.playerOstatus,
            cB: this.clickedBoxes,
            cP: this.CurrentPlayer
        };
        localStorage.setItem('gameStatus', JSON.stringify(gameStatus));
    }
    getLocalStorage() {
        const retrieved = JSON.parse(localStorage.getItem('gameStatus'));
        if (!retrieved)
            return;
        const { pX, pO, cB, cP } = retrieved;
        if (!retrieved)
            return;
        this.playerXstatus = pX;
        this.playerOstatus = pO;
        this.clickedBoxes = cB;
        this.CurrentPlayer = cP;
    }
    reRenderXnO() {
        this.playerOstatus.forEach((x) => {
            const tile = document.querySelector(`[data-tileid="${x}"]`);
            if (!tile)
                return;
            tile.textContent = 'O';
            tile.style.color = '#ff0000ce';
        });
        this.playerXstatus.forEach((x) => {
            const tile = document.querySelector(`[data-tileid="${x}"]`);
            if (!tile)
                return;
            tile.textContent = 'X';
            tile.style.color = '#0091ffce';
        });
    }
}
__decorate([
    autoBind
], TicTacToe.prototype, "clickHandler", null);
const firstTick = new TicTacToe();
