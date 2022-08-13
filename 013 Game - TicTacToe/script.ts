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

    tileContainer:HTMLElement;
    winnertText:HTMLElement;
    private winningConditions :[number,number,number][]= [
        [1,2,3],
        [4,5,6],
        [7,8,9],

        [1,4,7],
        [2,5,8],
        [7,8,9],

        [1,5,9],
        [7,5,3],
    ]

    playerXstatus:number[] = []
    playerOstatus:number[] = []
    clickedBoxes:number[] = []
    CurrentPlayer:'X'|'O' = 'O'

    constructor() {
        this.tileContainer = document.querySelector('.tileContainer')! as HTMLElement
        this.winnertText = document.querySelector('.Winner')! as HTMLElement
        this.getLocalStorage()
        this.reRenderXnO()
        this.winnertText.textContent = `${this.CurrentPlayer}'s Turn`
        this.tileContainer.addEventListener('click',this.clickHandler)
    
    }

    @autoBind
    private clickHandler(e:Event) {

        const targetBox = e.target! as HTMLElement
        const tileID = Number(targetBox.getAttribute('data-tileid'))

        // guard clause for clicking the same
        if(this.clickedBoxes.includes(tileID)) return
        targetBox.textContent = this.CurrentPlayer

        // make the box not clickable - update clickedboxes array
        targetBox.style.cursor = 'not-allowed'
        this.clickedBoxes.push(tileID)

        // update playersArray - reverse current player 
        if(this.CurrentPlayer == 'O'){
            this.playerOstatus.push(tileID)
            // console.log('O status -'+this.playerOstatus)
            targetBox.style.color = '#ff0000ce'
            
            // Check if O won
            this.CurrentPlayer = 'X'
        } else {
            this.playerXstatus.push(Number(tileID))
            // console.log('X status -'+this.playerOstatus)
            targetBox.style.color = '#0091ffce'

            // Check if O won
            this.CurrentPlayer = 'O'
        }

        // Check Status
        this.checkStatus()
        this.setLocalStorage()

    }

    private checkStatus() {
        if(this.winningConditions.some(y=> y.every(x=> this.playerOstatus.includes(x)))){
            // player O won
            // console.log('player O won')
            this.winnertText.innerHTML = 'Player O won!!! <br/> Game reset!...'
            this.resetGame()
            return
        }

        if(this.winningConditions.some(y=> y.every(x=> this.playerXstatus.includes(x)))){
            // player X won
            // console.log('player X won')
            this.winnertText.innerHTML = 'Player X won!!! <br/> Game reset!...'
            this.resetGame()
            return
        }

        if((this.playerOstatus.length + this.playerXstatus.length) == 9) {
            // console.log('Draw')
            this.winnertText.innerHTML = 'Draw!!! <br/> Game reset!...'
            this.resetGame()
            return
        }
        this.winnertText.textContent = `${this.CurrentPlayer}'s Turn`
        

    }

    private resetGame() {
        this.playerXstatus = []
        this.playerOstatus = []
        this.clickedBoxes = []
        this.CurrentPlayer = 'O'
        
        this.tileContainer.querySelectorAll('.tile').forEach((x:any)=>{
            x.textContent = '';
            x.style.cursor = 'pointer'
        })

        setTimeout(()=>{
            this.winnertText.innerHTML = ''
            this.winnertText.textContent = `${this.CurrentPlayer}'s Turn`
        },2000)
    }

    private setLocalStorage () {
        const gameStatus = {
            pX:this.playerXstatus,
            pO:this.playerOstatus,
            cB:this.clickedBoxes,
            cP:this.CurrentPlayer
        }
        localStorage.setItem('gameStatus',JSON.stringify(gameStatus))
    }

    private getLocalStorage () {
        const retrieved = JSON.parse(localStorage.getItem('gameStatus')!)
        const {pX,pO,cB,cP} = retrieved
        if(!retrieved) return
            this.playerXstatus = pX
            this.playerOstatus = pO
            this.clickedBoxes = cB
            this.CurrentPlayer = cP
    }

    private reRenderXnO () {
        this.playerOstatus.forEach((x:number)=>{
            const tile = document.querySelector(`[data-tileid="${x}"]`)! as HTMLElement
            if(!tile) return
            tile.textContent = 'O'
            tile.style.color = '#ff0000ce'
        })

        this.playerXstatus.forEach((x:number)=>{
            const tile = document.querySelector(`[data-tileid="${x}"]`)! as HTMLElement
            if(!tile) return
            tile.textContent = 'X'
            tile.style.color = '#0091ffce'
        })

    }

}

const firstTick = new TicTacToe()