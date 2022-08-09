type curPlayer = "X" | "O"

class TicTacToe {
    playerO:number[]= []
    playerX:number[]= []
    CurrentPlayer:curPlayer = 'O'
    tileContainer:HTMLElement;
    winnerText:HTMLElement;
    constructor(){
        this.tileContainer = document.querySelector('.tileContainer')! as HTMLElement
        this.winnerText = document.querySelector('.Winner')! as HTMLElement
        this.tileContainer.addEventListener('click',this.clickHandler)
    }
    @autoBind
    private clickHandler(event:any) {
        const targetTile = event.target

        targetTile.style.cursor = 'not-allowed'
        const tileNumber = Number(targetTile.getAttribute('data-tileid'))
        
        if(!targetTile.textContent){
            if(this.CurrentPlayer === 'O'){
                
                this.playerO.push(tileNumber)
                targetTile.textContent = this.CurrentPlayer
                targetTile.style.color = '#fefae0'
                this.checkDraw()
                this.checkWin(this.playerO,'O')
                this.CurrentPlayer = 'X'
            } else {

                this.playerX.push(tileNumber)
                targetTile.textContent = this.CurrentPlayer
                targetTile.style.color = '#dda15e'
                this.checkDraw()
                this.checkWin(this.playerX,'X')
                this.CurrentPlayer = 'O'
            }

        }
    }
    checkWin(array:any[],player:curPlayer){
        const winArrays = [
            [1,2,3],
            [4,5,6],
            [7,8,9],

            [1,4,7],
            [2,5,8],
            [3,6,9],
            
            [1,5,8],
            [3,5,7]
        ]
        if(winArrays.some(x=>x.every((x)=> array.includes(x)))){
            this.winnerText.textContent = `Player ${player} won!!!`
            setTimeout(()=>{
                this.winnerText.textContent = `Game Reset.`
            },1000)
            setTimeout(()=>{
                this.winnerText.textContent = ``
            },2000)

            this.resetGame()
        }
    }
    checkDraw() {
        if(this.playerO.length + this.playerX.length === 9){
            this.winnerText.textContent = `Draw!!!`
            setTimeout(()=>{
                this.winnerText.textContent = `Game Reset.`
            },1000)
            setTimeout(()=>{
                this.winnerText.textContent = ``
            },2000)
            this.resetGame()
        }
    }
    resetGame () {
        const allTiles = this.tileContainer.querySelectorAll('.tile')
        allTiles.forEach((x:any)=>{
            x.textContent = '';
            x.style.cursor = 'pointer'

    })

        this.playerO = []
        this.playerX = []
        this.CurrentPlayer = 'O'
    }
}
function autoBind(_:any,_2:any,propertyDescriptor:PropertyDescriptor){
    const origConstructor = propertyDescriptor.value
    const adjConstructor = {
        configurable:true,
        enumerable:false,
        get() {
            const boundFn = origConstructor.bind(this)
            return boundFn
        }
    }
    return adjConstructor
}

const App = new TicTacToe()