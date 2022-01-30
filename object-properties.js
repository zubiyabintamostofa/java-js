var computer={
    price:59000,
    color:'pink',
    Storage:'10gb'

}
//console.log(computer)
// jodi shudhu ekta nam dekhte chai tahole jeita dekhte chai oitar nam dite hobe
//console.log(computer.price)
//jodi kichu change korte chai tahole nicher niyom e korte hobe
//example
computer['price']=30000;
console.log(computer)

//different ways to set a value of an object property

var priceProperty='price';

computer.price=33000;
computer['price']=44000;
computer[priceProperty]=48000;