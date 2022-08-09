
const listMainContainer = document.querySelector('.todolistmainContainer');
const form = document.querySelector('.mainForm')

class App{

    todo = []
    constructor(){
        
        listMainContainer.addEventListener('click',this.removeTodo.bind(this))
        form.addEventListener('submit',this.addTodo.bind(this))
        this._getLocalStorage()
        this._updateUI()
    }

    addTodo(e){
        e.preventDefault()
        const inputText= form.querySelector('input').value
        console.log(inputText)
        if(inputText == '')return
        this.todo.push({id:uniqid(),todo:inputText})
        console.log(this.todo)

        this._setLocalStorage()
        this._updateUI()
    }

    removeTodo(e){
        if(!e.target.matches('a'))return
        const id = e.target.closest('.todolistContainer').getAttribute('data-id')
        this.todo.splice(this.todo.findIndex((x)=>x.id == id),1)
        this._setLocalStorage()
        this._updateUI()
    }

    _updateUI(){
        document.querySelector('.todolistmainContainer').innerHTML = '';
        this.todo.forEach((x)=>{
            const newHtml = document.createElement('div')
            newHtml.innerHTML = `
                    <div class="todolistContainer" data-id="${x.id}">
                        <p class="todolistText">
                        <a href="#/" class="todolistX">X</a>
                            ${x.todo}
                        </p>
                    </div>
                    `
            listMainContainer.insertAdjacentElement('beforeend',newHtml)
        })
    }

    _setLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todo))
    }
    _getLocalStorage(){
        if(!JSON.parse(localStorage.getItem('todo')))return
        const data = JSON.parse(localStorage.getItem('todo'))
        console.log(data)
        this.todo = data
    }

}

const app = new App()