const Bill = document.querySelector('.bill');
const Satisfaction = document.querySelector('.satisfaction');
const People = document.querySelector('.people');
const Calculate = document.querySelector('.calculate');
const Content = document.querySelector('.content');
const Result = document.querySelector('.result');
const BillDisplay = document.querySelector('.bill-display');
const TipDisplay = document.querySelector('.tip-display');
const goBack = document.querySelector('.go-back');



function calculateTip() {
    const billAmt = Number(Bill.value);
    Bill.value = '';
    
    const rangeValue = Satisfaction.value;
    Satisfaction.value = 50;
    
    const numberOfPeople = People.value;
    People.value = '';
    
    Content.classList.add('invisible');
    Result.classList.remove('invisible');

    const tipPercent = (10 * rangeValue)/100;
    const tip = Math.floor((billAmt * tipPercent)/100);
    const tipShare = Math.floor(tip/(numberOfPeople));
 
    BillDisplay.innerHTML = billAmt;
    TipDisplay.innerHTML = tipShare;
   
}

function GoBack() {
    Result.classList.add('invisible')
    Content.classList.remove('invisible')
}

Calculate.addEventListener('click', calculateTip);
goBack.addEventListener('click', GoBack);


