"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class TicTacToe {
    constructor() {
        this.playerO = [];
        this.playerX = [];
        this.CurrentPlayer = 'O';
        this.tileContainer = document.querySelector('.tileContainer');
        this.winnerText = document.querySelector('.Winner');
        this.tileContainer.addEventListener('click', this.clickHandler);
    }
    clickHandler(event) {
        const targetTile = event.target;
        targetTile.style.cursor = 'not-allowed';
        const tileNumber = Number(targetTile.getAttribute('data-tileid'));
        if (!targetTile.textContent) {
            if (this.CurrentPlayer === 'O') {
                this.playerO.push(tileNumber);
                targetTile.textContent = this.CurrentPlayer;
                targetTile.style.color = '#fefae0';
                this.checkDraw();
                this.checkWin(this.playerO, 'O');
                this.CurrentPlayer = 'X';
            }
            else {
                this.playerX.push(tileNumber);
                targetTile.textContent = this.CurrentPlayer;
                targetTile.style.color = '#dda15e';
                this.checkDraw();
                this.checkWin(this.playerX, 'X');
                this.CurrentPlayer = 'O';
            }
        }
    }
    checkWin(array, player) {
        const winArrays = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 8],
            [3, 5, 7]
        ];
        if (winArrays.some(x => x.every((x) => array.includes(x)))) {
            this.winnerText.textContent = `Player ${player} won!!!`;
            setTimeout(() => {
                this.winnerText.textContent = `Game Reset.`;
            }, 1000);
            setTimeout(() => {
                this.winnerText.textContent = ``;
            }, 2000);
            this.resetGame();
        }
    }
    checkDraw() {
        if (this.playerO.length + this.playerX.length === 9) {
            this.winnerText.textContent = `Draw!!!`;
            setTimeout(() => {
                this.winnerText.textContent = `Game Reset.`;
            }, 1000);
            setTimeout(() => {
                this.winnerText.textContent = ``;
            }, 2000);
            this.resetGame();
        }
    }
    resetGame() {
        const allTiles = this.tileContainer.querySelectorAll('.tile');
        allTiles.forEach((x) => {
            x.textContent = '';
            x.style.cursor = 'pointer';
        });
        this.playerO = [];
        this.playerX = [];
        this.CurrentPlayer = 'O';
    }
}
__decorate([
    autoBind
], TicTacToe.prototype, "clickHandler", null);
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
const App = new TicTacToe();
