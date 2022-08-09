const containerMain = document.querySelector('.containerMain')
const valMain = document.querySelector('.Calculation-Area')
class Calculator{
    mainString = ''
    constructor(){
        this._getLocalStorage()
        containerMain.addEventListener('click',this._addChar.bind(this))
        this._updateUI()
    }
    _addChar(e){    
        if(!e.target.closest('button'))return
        const action = e.target.closest('button').getAttribute('data-id')
        console.log(action)
        switch(action){
            case 'AC':
                this._allClear()
                break;
            case 'DEL':
                this._delLastChar()
                break;

            case '0':
                this.mainString += '0'
                break;

            case '1':
                this.mainString += '1'
                break;

            case '2':
                this.mainString += '2'
                break;

            case '3':
                this.mainString += '3'
                break;

            case '4':
                this.mainString += '4'
                break;
            case '5':
                this.mainString += '5'
                break;
            case '6':
                this.mainString += '6'
                break;
            case '7':
                this.mainString += '7'
                break;
            case '8':
                this.mainString += '9'
                break;
            case '.':
                this.mainString += '.'
                break;

            case '=':
                this._evaluateString()
                break;

            case '+':
                this.mainString += '+'
                break;
            case '-':
                this.mainString += '-'
                break;
            case '*':
                this.mainString += '*'
                break;
            case '/':
                this.mainString += '/'
                break;
        }
        this._updateUI()
    }

    _allClear(){
        this.mainString = ''
        this._updateUI()
    }

    _delLastChar(){
        this.mainString = this.mainString.slice(0,-1)
        this._updateUI()
    }

    _evaluateString(){
        this.mainString = String(eval(this.mainString))
        this._updateUI();
    }

    _updateUI(){
        valMain.value = String(this.mainString)
        this._setLocalStorage()
    }

    _setLocalStorage(){
        localStorage.setItem('calc',JSON.stringify(String(this.mainString)))
    }
    _getLocalStorage(){
        if(!localStorage.getItem('calc'))return
        this.mainString = JSON.parse(localStorage.getItem('calc'))
        this._updateUI()
    }


}

const app = new Calculator

