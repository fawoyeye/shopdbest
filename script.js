var select = document.querySelector('select');
var price = document.querySelector('.price');
var container = document.querySelector('.container');
var quantity = document.querySelector('.quantity');
var total = document.querySelector('.total');
var add = document.querySelector('.add');
var container = document.querySelector('.container');
var cancel = document.querySelector('.cancel');
var pay = document.querySelector('.payment');
var empty = document.querySelector('.empty');
var space = document.querySelector('.space');
var flex = document.getElementsByClassName('.flex');
price.value="0";
quantity.value="0";
total.value="0";
price.onclick = function()
{
price.value="";
switch (select.value){
 				case 'Semovita': price.value = 3050;
 				break;
 				case 'Wheat': price.value = 4000;  
 				break;
 				case 'Pure Bliss': price.value = 100;  
 				break;
 				case 'Coca cola': price.value = 200;  
 				break;
 						case 'Cake': price.value = 1000;  
 				break;
 						case 'Vegetables': price.value = 200;  
 				break;
 						case 'Fruits': price.value = 250;  
 				break;
 				case 'Bread': price.value = 800;  
 				break;
 				
 				
 				
 				
 				default: price.value = 0;
 };
 }

total.onclick =function () {
			total.value = price.value * quantity.value;	
}


add.onclick =function () {
var newDiv = document.createElement('div');
	var productParagraph = document.createElement('p');
		productParagraph.innerText = `Goods Bought:${select.value}`;	
		productParagraph.classList.add('addStyle');
		
		var totalParagraph =document.createElement('p');
		var totalPrice = document.createElement('span');
totalParagraph.innerText ="Total Price:";
totalParagraph.classList.add('totalLetter');
totalPrice.innerText = total.value;
totalPrice.classList.add('totalNumber');
var all = document.createElement('p');
all.appendChild(totalParagraph);
all.appendChild(totalPrice);
		all.classList.add('totalStyle');
		
		
		
	var quantityParagraph = document.createElement('p');
		quantityParagraph.innerText = `Quantity: ${quantity.value}`;	
		quantityParagraph.classList.add('addStyle');
newDiv.classList.add('flex');

newDiv.appendChild(all);
newDiv.appendChild(quantityParagraph);
newDiv.appendChild(productParagraph);
container.appendChild(newDiv);

cancel.onclick =function () {
			price.value="0";
quantity.value="0";
total.value="0";
	container.removeChild(newDiv);}
	
pay.onclick =function () {
				
var pe = document.createElement('p');
var totalPay = document.getElementsByClassName('totalNumber');
for(i=0;i<totalPay.length;i++){
pe.innerText += `+${totalPay[i].innerText}`};
 var leg = eval(pe.innerText);
 space.innerText = `Hi Human, Your Total Amount is ${leg} Naira. Thanks for shopping with the best` };
  
}
			


	
			empty.onclick = function () {
				container.innerHTML ="";	}
quantity.onclick =function () {quantity.value="";}

			



