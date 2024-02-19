function addBGById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1dd100]', 'text-white', 'border-0');
}
function removeBGById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1dd100]', 'text-white');
}

function addRow(elementId){
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");

    cell1.innerText = elementId;
    cell2.innerText = 'Economy';
    cell3.innerText = '550';

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    const tbody = document.getElementById('body');
    tbody.appendChild(row); 
}

function removeRow(elementId){
    const tbody = document.getElementById('body');
    const remove = elementId;

    for(const x of tbody.children){
        const cell = x.querySelector("td: first-child");
        
        if(cell && cell.innerText === remove){
            tbody.removeChild(x);
            break;
        }
        
    }
}

function getCoupon(){

    // removes or add apply button
    const submitBtn = document.getElementById('submit');
    const seatAmount = document.getElementById('total-cost').innerText;
    const seatNum = parseInt(seatAmount);
        

    //to get discount element
    const discountedCostElement = document.getElementById('discounted-cost');

    // shows total cost without discount
    const cost = 550*seatNum;
    discountedCostElement.innerText = cost;

    // finds entered coupon code
    const coupon = document.getElementById('coupon-input').value;
    // console.log(coupon);

    //initiates grand total function to show final price
    if(coupon){
        const code = coupon;
        grandTotal(code);
        const submitBtn = document.getElementById('submit'); 
    }
}

function grandTotal(code){


    let grandTotal = document.getElementById('total-cost').innerText;
    const finalCost = parseInt(grandTotal);
    const couponArea = document.getElementById("coupon-area");

    if(code === 'NEW15'){
        grandTotal = finalCost-finalCost*.15;
        couponArea.classList.add('hidden');
    }
    else if(code === 'Couple 20'){
        grandTotal = finalCost-finalCost*.20;
        couponArea.classList.add('hidden');
    }
    else
        grandTotal = finalCost;

    const discountedCostElement = document.getElementById('discounted-cost');
    discountedCostElement.innerText = grandTotal;
}