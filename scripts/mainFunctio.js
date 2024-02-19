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

    if(seatAmount>3)
        return;

    alert(seatNoArr.length);

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
            removeRow(elementId);
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
    
    if(seatNoArr.length<4){
        discountedCostElement.innerText = 550*seatNoArr.length;
        console.log('this is from <4 loop')
    }
    if(seatNoArr.length===4){
        getCoupon();
        console.log('This is from ===')
    }

}

function alert(seat){
    const alert = document.getElementById('alert');

    if(seat < 4)
        alert.classList.add('hidden');
    else
        alert.classList.remove('hidden');
}