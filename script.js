var buyingPriceTag = document.getElementById('buying-price');
var quantityTag = document.getElementById('quantity');
var currentPriceTag = document.getElementById('current-price');
var statusTag = document.getElementById('status');
var checkStatus = document.getElementById('checkStatus');

function checkIsTriangle(){
    console.log("inside check is triangle",buyingPriceTag);
    let sum = parseInt(buyingPriceTag.value) + parseInt(quantityTag.value) + parseInt(currentPriceTag.value);
    if(!buyingPriceTag.value){
        statusTag.innerHTML = "please enter buying price per share <span>😟</span>"
        return
    } 
    if(!quantityTag.value){
        statusTag.innerHTML = "please enter total quantify of shares <span>😟</span>"
        return
    } 
    if(!currentPriceTag.value){
        statusTag.innerHTML = "please enter current price per share <span>😟</span>"
        return
    }
    buyingPrice = parseFloat(buyingPriceTag.value)
    currentPrice = parseFloat(currentPriceTag.value)
    totalQuantify = parseInt(quantityTag.value)
    totalCostPrice = buyingPrice*totalQuantify
    totalCurrentPrice = currentPrice*totalQuantify
    if(totalCostPrice > totalCurrentPrice){
        statusTag.innerHTML = `<div style="color:red">your stocks are in loss.<br> your total loss is ${totalCostPrice - totalCurrentPrice}.<br> your loss percentage is ${parseFloat((totalCostPrice - totalCurrentPrice)*100/totalCostPrice).toFixed(2)}% 😟</div>`
    }else if(totalCostPrice < totalCurrentPrice){
        statusTag.innerHTML = `<div style="color:green">hurray! your stocks are in profit.<br> your total profit is ${ totalCurrentPrice - totalCostPrice}.<br> your profit percentage is ${parseFloat((totalCurrentPrice - totalCostPrice)*100/totalCostPrice).toFixed(2)}% 🥳🥳</div>`
    } else{
        statusTag.innerHTML = "your stocks are at buying price.<br> You haven't made any profit or loss."
    }
}

checkStatus.addEventListener('click',checkIsTriangle);


