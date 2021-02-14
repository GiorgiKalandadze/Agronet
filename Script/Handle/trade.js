document.addEventListener('click', function (e){
	if(e.target.className == "trade-category-button"){
		clearCategory(chosenCategoryId);
		chooseCategory(e.target.id);
		document.getElementsByClassName('trade-right')[0].innerHTML = '';
		loadCategoryItems(e.target.id.substring(8));
		closeNavTrade();
	}
	
	
	//e.preventDefault();
	if(e.target.className == 'item-img'){
		document.getElementsByClassName('trade-right')[0].innerHTML = itemInHTML;
		loadItemIn(e);
		router.navigate('/Items/' + e.target.id);
	}
	if(e.target.id == 'trade-in-back'){
		document.getElementsByClassName('trade-right')[0].innerHTML = '';
		loadCategoryItems(chosenCategoryId.substring(8));
		
	}
	
});

var chosenCategoryId = "category1";
function clearCategory(id){
	document.getElementById(id).style.backgroundColor = "white";
	document.getElementById(id).style.color = "black";
	chosenCategoryId = 0;
}
function chooseCategory(id){
	var buttons = document.getElementsByClassName("trade-category-button");
	var currentButton = null;
	for(i = 0; i < buttons.length; i++){
		currentButton = buttons[i];
		if(currentButton.id != id){
			currentButton.style.backgroundColor = "white";
			currentButton.style.color = "black";
		} else {
			currentButton.style.backgroundColor = "#637a94";
			currentButton.style.color = "white";
		}
	}
	chosenCategoryId = id;
}
function displayAllItems(){
	
}
function removeAllItems(){

}

function loadCategoryItems(index){
	var array = items[index - 1];
	var d = document.createElement('div');
	d.className = 'trade-list';
	var folder = "";
	for(j = 0; j < array.length; j++){
		var item = array[j];
		if(j == 0){
			folder = item;
			continue;
		}
		var div = document.createElement('div');
		div.className = 'trade-item';
		var img = document.createElement('img');

		img.src = "./Images/Items/" + folder + "/" + item.img;
		img.alt = item.name;
		img.className = 'item-img';
		img.id = item.id;
		img.setAttribute("categoryId", index);
		var h3 = document.createElement('h3');
		h3.className = 'item-title';
		h3.innerHTML  = item.name;
		var type = document.createElement('p');
		type.className ='item-type';
		type.innerHTML = item.type;
		var location = document.createElement('p');
		location.className ='item-location';
		location.innerHTML = item.location;
		var p = document.createElement('p');
		p.innerHTML = item.description;
		p.className = 'item-description';
		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(type);
		div.appendChild(location);
		div.appendChild(p);
		d.appendChild(div);
	}
	
	document.getElementsByClassName('trade-right')[0].appendChild(d);

}








// var slider = document.getElementById("price-ranger");
// var output = document.getElementById("price-value");
// output.innerHTML = slider.value; // Display the default slider value
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = document.getElementById("price-ranger").value;
// }



function loadItemIn(e){
	var id = e.target.id;
	var categoryId = e.target.getAttribute("categoryId");
	var categoryArray = items[categoryId - 1];
	var item = categoryArray[id];
	document.getElementsByClassName('item-in-back-img')[0].src = "./Images/Items/" + categoryArray[0] + "/" + item.img;
	document.getElementsByClassName('item-in-back-img')[0].alt = item.name; 
	document.getElementById('item-in-name').innerHTML = item.name;
	document.getElementById('item-in-price').innerHTML = item.price;
	document.getElementById('item-in-description').innerHTML = item.description;
	document.getElementsByClassName('trade-right')[0].style.height = '650px';
	
}















//Vip slider ///////////////////////////////////////////////////////////////////////
document.addEventListener('click', function (e){
	
	if(e.target.className == 'vip-slide'){
		if(e.target.id == 'next'){
			vipCounter += 1;
		} else {
			vipCounter -= 1;
		}
		changeSlide(vipCounter);
	}
	if(e.target.className == 'vip-img'){
		document.getElementsByClassName('main-content')[0].innerHTML = tradeHTML;
		loadItems();
		document.getElementsByClassName('trade-right')[0].innerHTML = itemInHTML;
		loadItemIn(e);

	}
});
var vipCounter = 0;
function changeSlide(counter){
	if(counter < 0){
		counter = items.length + counter;
	}
	if(counter >= items.length){
		counter = counter % items.length;
	}

	var slides = document.getElementsByClassName('vip-img');
	slides[0].src = items[counter].img;
	slides[1].src = items[(counter + 1) % items.length].img;
	slides[2].src = items[(counter + 2) % items.length].img;
	slides[3].src = items[(counter + 3) % items.length].img;
}