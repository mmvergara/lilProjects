const inputUI = document.querySelector('.user--input') as HTMLElement | null;

let how_much_time = 0;
let how_many_character= 0;
let timedisplay = 0;
let displaychar = "hey";
let userInput = "";
let originalTime = 0;
let score = 0;
let mode ="";
var metronome = new Audio("metronome.mp3");
var fuse = new Audio("fuse.mp3");
var tntboom = new Audio("tntboom.mp3");
var ding = new Audio("ping.mp3")
var checkUserInputInterval;
$('.button-reset').click(function(){
    location.reload()
});

$('.easy').click(function(){
    how_much_time = 10000;
    how_many_character = 5;
    originalTime = how_much_time;
    mode = "Easy";

    timedisplay = how_much_time / 1000;
    $('#timedisplay').html(""+timedisplay+"");
    start();
});

$('.medium').click(function(){
    how_much_time = 7000;
    how_many_character = 6;
    originalTime = how_much_time;
    mode = "Medium";

    timedisplay = how_much_time / 1000;
    $('#timedisplay').html(""+timedisplay+"");
    start();
});

$('.hard').click(function(){
    how_much_time = 7000;
    how_many_character = 8;
    originalTime = how_much_time;
    mode = "Hard";

    timedisplay = how_much_time / 1000;
    $('#timedisplay').html(""+timedisplay+"");
    start();
});

$('.veryhard').click(function(){
    how_much_time = 5000;
    how_many_character = 9;
    originalTime = how_much_time;
    mode = "Very Hard";

    timedisplay = how_much_time / 1000;
    $('#timedisplay').html(""+timedisplay+"");
    start();

});


function start(){

    setTimeout(()=>{
        if (inputUI != null) {
            inputUI.focus();
        }
    },1)

    $('.container-configuration').addClass('dp-none-this')
    $('.container-game').removeClass('dp-none-this')
    createNewCharacters();
    checkUserInput();
}

function createNewCharacters(){
    displaychar = "";
    const randomchar = ['0indexX','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a']
    const randomrange = randomchar.length - 1;
    let randomNJ = Math.floor(Math.random() * randomrange )+1;
    for (let i = 1; i < how_many_character ;i++){
        displaychar = displaychar + randomchar[randomNJ];
        randomNJ = Math.floor(Math.random() * randomrange )+1;
    };
    $('#RandomChars').html(displaychar);
}




function checkUserInput(){

    how_much_time = originalTime;
    timedisplay = how_much_time / 1000;
    metronome.play();
    fuse.play();
    $('#timedisplay').html("" + timedisplay + "");
    var TimerInterval = setInterval(() => {
        how_much_time -= 1000;
        timedisplay = how_much_time / 1000;
        $('#timedisplay').html("" + timedisplay + "");

        if (timedisplay <= 0) {
            $('#timedisplay').html("0");
            clearInterval(TimerInterval)
            $('.container-timer-bomb').addClass('dp-none-this');
            $('.game-ui').addClass('dp-none-this');
            $('.container-expolosion').removeClass('dp-none-this');

            setTimeout(() => {
                $('.2reset').removeClass('dp-none-this');
            },2000)
            
            $('.1reset').addClass('dp-none-this');
            metronome.pause();
            fuse.pause();
            tntboom.play();
            $('#TotalScore').html(""+score+"");
            $('#Difficulty1').html(mode);

            if (mode == "Easy"){
                $("#Difficulty1").css("color","#198754")
            } else if ( mode == "Medium"){
                $("#Difficulty1").css("color","#ffc107")
            } else if ( mode == "Hard"){
                $("#Difficulty1").css("color","#dc3545")
            } else{
                $("#Difficulty1").css("color","#6c757d")
            }
        }
    }, 1000);

    var checkUserInputInterval = setInterval(()=>{
        userInput = String($('.user--input').val()); 
        if (userInput == displaychar){
            $('.user--input').val("")
            ding.volume = 0.4;
            ding.play();
            score++;
            clearInterval(TimerInterval);
            clearInterval(checkUserInputInterval);
            start();


        } else {
            userInput = String($('.user--input').val()); 
        }
    },200);


}











// CMD -> tsc -> tsc --watch
// BG Functions
function clearIndexes(){
    how_much_time = 0;
    how_many_character = 0;
};


