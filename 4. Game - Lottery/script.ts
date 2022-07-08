let slotpicIndex1;
let slotpicIndex2;
let slotpicIndex3;
const slot1Arr = ['heart','crown','leaves','69']
const slot2Arr = ['heart','crown','leaves','69']
const slot3Arr = ['heart','crown','leaves','69']
let slot1final = '';
let slot2final = '';
let slot3final = '';
let YourBalance = 1000;
let BetBalance = 0;
let BalanceSetted = 0;
let balset = $('#setbet-input').val();
let balsetInt = 0;

$('#howtoplay').click(function(){
$('.tutorial').removeClass('dp-none-this')
setTimeout(()=>{
$('.tutorial').addClass('dp-none-this')
},5000)
});

$('.btn-widthdraw').click(function(){
    YourBalance = YourBalance + BetBalance;
    BetBalance = 0;
    checkBal();
    checkBetBal();
});
$('#setbet-button').click(function(){
    balset = $('#setbet-input').val();
    while (balset != balsetInt){
        balsetInt++;
    }
    console.log(balsetInt)
    BetBalance += balsetInt;
    YourBalance -= balsetInt
    checkBal();
    checkBetBal();
});

$('.btn-spinIT').click(function(){
randomRollSlots();
setTimeout(deciderSlot,2000)
});


function randomRollSlots(){
    var randomRolling = setInterval(()=>{
        slotpicIndex1 = Math.floor((Math.random()*4)+1)
        slotpicIndex2 = Math.floor((Math.random()*4)+1)
        slotpicIndex3 = Math.floor((Math.random()*4)+1)
        $('.slot1 > img:nth-child('+ slotpicIndex1 +')')
        .removeClass('opacity-none-this')
        .removeClass('dp-none-this')
        .siblings()
        .addClass('opacity-none-this')
        .addClass('dp-none-this')
        $('.slot2 > img:nth-child('+ slotpicIndex2 +')')
        .removeClass('opacity-none-this')
        .removeClass('dp-none-this')
        .siblings()
        .addClass('opacity-none-this')
        .addClass('dp-none-this')
        $('.slot3 > img:nth-child('+ slotpicIndex3 +')')
        .removeClass('opacity-none-this')
        .removeClass('dp-none-this')
        .siblings()
        .addClass('opacity-none-this')
        .addClass('dp-none-this')
    } ,100);
    setTimeout(clearRoll,1900)
    function clearRoll(){
        clearInterval(randomRolling)
    };
};


function deciderSlot(){
    slotpicIndex1 = Math.floor((Math.random()*4))
    slotpicIndex2 = Math.floor((Math.random()*4))
    slotpicIndex3 = Math.floor((Math.random()*4))

    slot1final = slot1Arr[slotpicIndex1]
    slot2final = slot2Arr[slotpicIndex2]
    slot3final = slot3Arr[slotpicIndex3]

    if (slot1final == "leaves"){
$('.slots1-leaves')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else if (slot1final == "crown") {
$('.slots1-crown')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else if ( slot1final == "heart"){
$('.slots1-heart')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else {
$('.slots1-69')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    }

if (slot2final == "leaves"){
$('.slots2-leaves')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else if (slot2final == "crown") {
$('.slots2-crown')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else if ( slot2final == "heart"){
$('.slots2-heart')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else {
$('.slots2-69')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    }


if (slot3final == "leaves"){
$('.slots3-leaves')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else if (slot3final == "crown") {
$('.slots3-crown')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else if ( slot3final == "heart"){
$('.slots3-heart')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    } else {
$('.slots3-69')
.removeClass('opacity-none-this')
.removeClass('dp-none-this')
.siblings()
.addClass('opacity-none-this')
.addClass('dp-none-this')
    }

if ( slot1final == slot2final && slot1final == slot3final){
    console.log("You WIN!");
    BetBalance *= 2;
}else if (slot1final == slot2final || slot1final == slot3final || slot3final == slot2final){
    BetBalance = 0;
    console.log('Close - Lose')
} else {
    BetBalance = 0;
    console.log('Lose')
}

checkBal();
checkBetBal();
}



function checkBal(){
    $('#Balance').html(""+YourBalance+"");
    console.log("CheckBalfnc");
};

function checkBetBal(){
    $('.bet-bal').val(""+BetBalance+"");
    console.log("checkbetbal");
}

