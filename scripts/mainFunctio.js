function goTOCounterPart(){
    const counterPart = document.getElementById('counterPart');
    // console.log(counterPart);
    counterPart.scrollIntoView({behavior: 'smooth'});
}

const seatNoArr = [];

document.getElementById("coupon-area").classList.remove("hidden");

function action(elementId){
    // const element = document.getElementById(elementId).innerText;
    // console.log(elementId);
    // seat er value grab korte hbe ar 4 er besi hoile return korbe
    
    const seatAmount = document.getElementById('my-seat').innerText;

    if(seatAmount>3){
        alert(seatNoArr.length);
        return;
    }


    if(seatNoArr.length<4){
        addBGById(elementId);
        addRow(elementId);
    }

    //checks if specific element exists or not + modifies bg of button and array
    if(seatNoArr.includes(elementId)){
        // console.log(elementId);
        // console.log('ache');
        // console.log(seatNoArr.indexOf(elementId));
        const index = seatNoArr.indexOf(elementId);
        if(index>=0){
            seatNoArr.splice(index, 1);
            removeBGById(elementId);
            // removeRow(elementId);
        } 
    }
    else{
        // console.log(elementId)
        // console.log('nai');
        if(seatNoArr.length<4)
            seatNoArr.push(elementId);
    }

    const mySeat = document.getElementById("my-seat");
    const seat = document.getElementById('seat-left');

    const liveSeat = 40 - seatNoArr.length;
    seat.innerText = liveSeat;

    mySeat.innerText = seatNoArr.length;

    const cost = document.getElementById('total-cost');
    const discountedCostElement = document.getElementById('discounted-cost');
    cost.innerText = 550*seatNoArr.length;
    
    if(seatNoArr.length<=4){
        discountedCostElement.innerText = 550*seatNoArr.length;
        console.log(seatNoArr.length)
    }
    // jhamela
    if(seatNoArr.length>0){
        const submitBtn = document.getElementById('submit');
        submitBtn.classList.remove('hidden');
        console.log(seatAmount)
    }


    const mobile = document.getElementById('mobile');
    const nextButton = document.getElementById('next');

    mobile.addEventListener("keyup", function (event){
        const value = event.target.value;
        if(value === " " || !isNaN(value)){
            nextButton.removeAttribute('disabled');
            // mobile.value = ' ';
        }
        else
            nextButton.addAttribute('disabled');
    })

    nextButton.addEventListener("click", function(){
        mobile.value = '';
    })
    

}

function alert(seat){
    const alert = document.getElementById('alert');

    if(seat < 4)
        alert.classList.add('hidden');
    else
        alert.classList.remove('hidden');
}