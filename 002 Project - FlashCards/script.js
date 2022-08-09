let totalCards = $('.FC-main-contain').children().length;
let totalCardsArr = [];
let card2bdp;
let card2bdpindex = 0;
let totalCardsLength;
let timeIntervalCard; 
var IntervalTime;
var IntervalTimer;
var Intervalaudio;
let ShowIndex;
let timerdisplayspan = $('#nexttimer').val();
var audcorrect = new Audio('https://cdn.discordapp.com/attachments/963640262393999430/981652390702878791/corret.mp3');
var auderror = new Audio('https://cdn.discordapp.com/attachments/963640262393999430/981652390979710986/error.mp3');
        

$('.card-setting').click(function(){
    $('.cards-set-number').addClass('dp-none');
});

$('.settime').click(function(){
    timeIntervalCard = $('#nexttimer').val();
    timeIntervalCard = timeIntervalCard * 1000;
    $('.bigppcontainer').removeClass('dp-none');
    $('.main-form-container').addClass('dp-none');
});



for (let i = 1; i < totalCards + 1;i++){
    totalCardsArr.push(i)
}
shuffle(totalCardsArr);
totalCardsLength = totalCardsArr.length;

$('.button--next').click(function(){
    audcorrect.play();
    $('.Next-Card-in').removeClass('dp-none')
    $('.button--next').html('Next Card')
    clearInterval(IntervalTime);
    clearInterval(Intervalaudio);
    nextCard();
    IntervalTime = setInterval(nextCard, timeIntervalCard);
    Intervalaudio = setInterval(audiocorerr, timeIntervalCard)
    updateTimeDP();
    
});

function audiocorerr(){
    auderror.play();
};

function nextCard(){
    card2bdp = totalCardsArr[card2bdpindex]
    if (typeof card2bdp === "undefined"){
        card2bdpindex = 0;
        $('#you-finished-all').html('('+totalCardsLength+')')
        $('.h4finish').removeClass('dp-none') 
    }
    card2bdp = totalCardsArr[card2bdpindex]
    $(".FC-main-contain > div:nth-child(" + card2bdp + ")")
    .removeClass('dp-none')
    .siblings()
    .addClass('dp-none')
    card2bdpindex += 1;

    ShowIndex = randomIntFromInterval(1, 2);
    if (ShowIndex == 1){
        showAnswer()
    } else if (ShowIndex == 2){
        showQuestion()
    }
    timerdisplayspan = $('#nexttimer').val();
}


function updateTimeDP(){

    if (timerdisplayspan == 0){
        timerdisplayspan = $('#nexttimer').val();
    } else {
        $('#time--display--span').html(timerdisplayspan);
        timerdisplayspan -= 1; 
    }
    clearInterval(IntervalTimer);
    IntervalTimer = setTimeout(updateTimeDP, 1000);
    

}


// Background Functions
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

      // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
    }
    return array;
}
$('.button--back').click(function(){
    $('.cards-set-number').removeClass('dp-none');
    location.href="cards.php";
});
$('#shuffle-button').click(function(){
    location.reload();
});
$('.card-question').click(function(){
    showAnswer()
});
$('.card-answer').click(function(){
    showQuestion()
});


function showAnswer(){
    $('.card-question').addClass('dp-none');
    $('.card-answer').removeClass('dp-none');
};

function showQuestion(){
    $('.card-question').removeClass('dp-none');
    $('.card-answer').addClass('dp-none');
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}