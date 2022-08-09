const countries = [ 'Kuwait','Palau','Liechtenstein','Moldova','Angola','Bolivia','Tuvalu','Peru','New','Germany','Botswana','Afghanistan','Hungary','Burkina','Canada','Saint','Indonesia','Taiwan','Saint','Aruba','Gabon','South','Liberia','Turks','Western','Turkey','Mali','Benin','Cyprus','Somalia','Niger','Faroe','Portugal','Senegal','Cuba','Belarus','Barbados','Tunisia','Israel','Italy','Myanmar','Antarctica','Micronesia','Wallis','Djibouti','Republic','Gibraltar','DR','Belize','Bermuda','Australia','Saint','Cameroon','Russia','Antigua','Japan','Cayman','Caribbean','Honduras','Heard','Burundi','Paraguay','Argentina','French','São','Lesotho','Sudan','El','Christmas','Kyrgyzstan','Brazil','Cambodia','Montserrat','South','Guatemala','United','Azerbaijan','Malaysia','Colombia','Mauritania','Bahrain','Belgium','Chile','North','Mozambique','Norfolk','American','Ethiopia','Guadeloupe','Guam','India','Puerto','Spain','Kazakhstan','Oman','United','Poland','French','Grenada','Sri','Tajikistan','Syria','Libya','Haiti','San','Tonga','British','Georgia','Eritrea','Tanzania','Czechia','Kosovo','Bhutan','Egypt','Saint','Vietnam','Marshall','Austria','Papua','Bahamas','Croatia','Slovenia','Uzbekistan','Finland','Guyana','Åland','Monaco','Slovakia','Yemen','Malawi','Gambia','Panama','Isle','Ireland','South','Greece','Guernsey','Pakistan','Pitcairn','Armenia','Malta','Turkmenistan','Dominican','Solomon','Vanuatu','Madagascar','Laos','Cook','Saint','Mongolia','Martinique','France','Central','Anguilla','Eswatini','United','Iceland','Nepal','Ghana','Iraq','Thailand','Denmark','Serbia','Uganda','Cocos','Montenegro','Saudi','Jordan','Suriname','New','Kenya','Mexico','Bosnia','Saint','Seychelles','Saint','Tokelau','Bulgaria','Falkland','Latvia','Réunion','Guinea','Lebanon','Luxembourg','Mauritius','Estonia','Norway','Comoros','Venezuela','Iran','Sweden','Fiji','Philippines','Hong','Uruguay','Macau','Switzerland','Trinidad','Rwanda','Albania','Guinea-Bissau','Ivory','North','Bouvet','Andorra','Maldives','Nauru','Singapore','Zimbabwe','United','Dominica','Morocco','Mayotte','Qatar','Sint','Costa','Niue','Curaçao','Cape','Netherlands','Romania','Sierra','Nicaragua','Algeria','Jamaica','Togo','Vatican','Jersey','Ecuador','Samoa','British','Nigeria','Zambia','French','Chad','Svalbard','Lithuania','Ukraine','China','United','Northern','Palestine','Greenland','South','Bangladesh','Equatorial','Namibia','Timor-Leste','Brunei','Kiribati' ]
const countryToBeGuess = document.querySelector('#countryH');
const input = document.querySelector('#userInput') as HTMLInputElement;
const buttonSubmit = document.querySelector('.btn-success')
const buttonReveal = document.querySelector('.btn-danger')
const statusCheck = document.querySelector('.statusIS')!
const reRenderContainer = document.querySelector('.reRender')!

function getRandomCountryName(){
    return countries[Math.floor(Math.random() * countries.length)]
}


class Capital {

    country = ''
    flagLink = ''
    private capital = ''

    constructor(){
        buttonSubmit?.addEventListener('click', this.submitCheckAnswer.bind(this))
        buttonReveal?.addEventListener('click', this.revealAnswer.bind(this))
    }
    updateQuiz(){
        console.log(`capital is ${this.capital}`)

        reRenderContainer.innerHTML = ''
        statusCheck.innerHTML = ''

        input.value = ''
        const html = `  <div class="imgS">
                            <img src="${this.flagLink}" alt="country" width="250">
                        </div>
                        <h4>What is the capital of <br> <span id="countryH">${this.country} ?</span></h4>
                        `
        const el = document.createElement('div')
        el.innerHTML = html
        reRenderContainer.insertAdjacentElement('beforeend',el)
    }
    submitCheckAnswer(){
        if(input.value.toLowerCase() === this.capital.toLowerCase()){
            statusCheck.innerHTML =  'Correct! Wait for the next one!'
            this.fetchAnotherCountry()
        } else {
            statusCheck.innerHTML =  'Wrong Try again'
        }
    }
    async fetchAnotherCountry(){
        try{
            const fetchNewCountry = await fetch(`https://restcountries.com/v3.1/name/${getRandomCountryName()}`)
            const cntryJson = await fetchNewCountry.json()
                  this.country = cntryJson[0].name.common;
                  this.flagLink = cntryJson[0].flags.png;
                  this.capital = cntryJson[0].capital[0];
            setTimeout(()=>{this.updateQuiz()},1000)
        } catch (err:any){
            alert(`Cannot get country data, check internet`)
            throw new Error(err)
        }
    }
    revealAnswer(){
        alert(`The capital is ${this.capital}`)
    }
}

const App = new Capital()
App.fetchAnotherCountry()
