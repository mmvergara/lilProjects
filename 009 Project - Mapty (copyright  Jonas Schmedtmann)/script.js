'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const ul = document.querySelector('.workouts')


class Workout {
    date = new Date();
    id = uniqid();
    constructor(coords,distance,duration){
        this.coords = coords // [latitude,longitude]
        this.distance = duration
        this.duration = distance //km
    }

    _setDescription(){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`        
    }


}
class Running extends Workout{
    type = 'running'
    constructor(coords,distance,duration,cadence){
        super(coords,distance,duration)
        this.cadence = cadence
        this.calcPace()
        this._setDescription()
    }
    calcPace(){
        this.pace = ( this.distance / this.duration)
        return this.pace
    }
}
class Cycling extends Workout{
    type = 'cycling'
    constructor(coords,distance,duration,elevationGain){
        super(coords,distance,duration)
        this.elevationGain = elevationGain
        this.calcSpeed()
        this._setDescription()
    }
    calcSpeed(){
        this.speed = this.distance / this.duration
        return this.speed
    }
}


class App{
    #map;
    #mapEvent;
    workout = [];
    #lastMarker
    constructor(){
        this._getPosition();
        //get local storaege
        this._getLocalStorage();

        form.addEventListener('submit',this._newWorkout.bind(this))        
        inputType.addEventListener('change',this._toggleElevationField)
        ul.addEventListener('click',this._panOver.bind(this))
        
    }

    _getPosition(){
        navigator.geolocation?.getCurrentPosition(this._loadMap.bind(this),function(){
            alert('could not get your current position')
        })
    }

    _panOver(e){
        if(!e.target.closest('.workout'))return
        const id = e.target.closest('.workout').getAttribute('data-id')
        const coordsToPan = this.workout.find((x)=>x.id == id).coords
        console.log(coordsToPan)
        this.#map.setView(coordsToPan, 13,{animate:true,duration:0.25}) 
    }

    _loadMap(pos){
            const {latitude} = pos.coords    
            const {longitude} = pos.coords    
            const coords = [latitude,longitude]        
            this.#map = L.map('map').setView( coords , 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.fr/hot//copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
            this.#map.on('click',this._showForm.bind(this))

            this.workout.forEach(work=>{
                this._renderWorkoutMarker(work)
            })
    }

    _showForm(mapE){
        var icon = new L.Icon.Default();
        icon.options.shadowSize = [0,0];
        const {lat,lng} = mapE.latlng
        this.#lastMarker?.getElement().parentNode.removeChild(this.#lastMarker?.getElement())
        this.#lastMarker = L.marker([lat,lng],{className:'anotherone',icon : icon}).addTo(this.#map)
        this.#mapEvent = mapE
        form.classList.remove('hidden')
        inputDistance.focus()
    }

    _toggleElevationField(){
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
            inputCadence.value = ''
            inputElevation.value = '' 
    }

    _newWorkout(e){
        e.preventDefault()
        const checkNum = function(...val){
            return val.every(x => Number.isFinite(x) && x>0)
        }

            
            //get data
            const {lat,lng} = this.#mapEvent.latlng
            const type = inputType.value
            const distance = +inputDistance.value
            const duration = +inputDuration.value
            let Nworkout
            //check if data is valid
            if(type === 'running'){
                const cadence = +inputCadence.value
                if(!checkNum(cadence,distance,duration)){alert('Input has to be positive numbers')}
                Nworkout = new Running([lat,lng],distance,duration,cadence)
                
            }

            if (type === 'cycling'){
                const elevation = +inputElevation.value
                if(!checkNum(distance,duration) || !Number.isFinite(elevation)){alert('Input has to be positive numbers')}
                Nworkout = new Cycling([lat,lng],distance,duration,elevation)

            } 
            this.workout.push(Nworkout)
            this._renderWorkoutMarker(Nworkout) 
            this._renderWorkout(Nworkout)


            this._setLocalStorage()

        }

        _renderWorkoutMarker(work){
            L.marker(work.coords).addTo(this.#map)
            .bindPopup(L.popup({
                autoClose:false,
                closeOnClick:false,
                maxWidth: 250,
                minWidth: 100,
                className:`${work.type}-popup`
            }))
            .setPopupContent(`${work.distance}`)
            .openPopup();

        }
         
        _renderWorkout(workout){
            let html = `<li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
              <span class="workout__icon">${workout.type === 'running' ?'🏃‍♂️':'🚴‍♀️'} </span>
              <span class="workout__value">${workout.distance}</span>
              <span class="workout__unit">m</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${workout.duration}</span>
              <span class="workout__unit">min</span>
            </div>`

            if(workout.type == 'running'){
                html+=`
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${Math.trunc(workout.pace)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${Math.trunc(workout.cadence)}</span>
                <span class="workout__unit">spm</span>
              </div>`
            }
            if(workout.type == 'cycling'){
                html+=`
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${Math.trunc(workout.speed)}</span>
                <span class="workout__unit">km/h</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${Math.trunc(workout.elevationGain)}</span>
                <span class="workout__unit">m</span>
              </div>`
            }
            var htmlObject = document.createElement('div')
            htmlObject.innerHTML = html
            form.insertAdjacentElement('afterend',htmlObject)
            this._hideForm()
        }

        _hideForm(){
            form.classList.add('hidden')
            inputCadence.value = ''
            inputDistance.value = ''
            inputDuration.value = ''
            inputElevation.value = ''
        }

        _setLocalStorage(){
            localStorage.setItem('workouts',JSON.stringify(this.workout))
        }

        _getLocalStorage(){
            const data = JSON.parse(localStorage.getItem('workouts'))
            if(!data)return;

            this.workout = data;

            this.workout.forEach(work=>{
                this._renderWorkout(work)
            })
        } 

        reset(){
            localStorage.removeItem('workouts')
            location.reload()
        }
    }


const app = new App()

















