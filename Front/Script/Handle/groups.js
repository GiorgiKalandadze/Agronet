
document.addEventListener('click', function (e){
	if(e.target.className == "category"){
		filterGroups(e, e.target.id);
	}
	// e.preventDefault();
	// if(e.target.id == 'birds'){
	// 	filterGroups(e, 'group bird');
	// }
	// if(e.target.id == 'animals'){
	// 	filterGroups(e, 'group animal');
	// }
	// if(e.target.id == 'fruit'){
	// 	filterGroups(e, 'group fruit');
	// }
	// if(e.target.id == 'vegetable'){
	// 	filterGroups(e, 'group vegetable');
	// }
	// if(e.target.id == 'tech'){
	// 	filterGroups(e, 'group tech');
	// }
	if(e.target.id == 'back'){
		document.getElementsByClassName('group-cont')[0].innerHTML = groupsListHTML;
		loadGroups();
		checked = 0;
	}
	if(e.target.id == 'follow-group'){
		document.getElementById('follow-group').style.display = 'none';
		document.getElementById('followed-group').style.display = 'block';
		
	}
	if(e.target.id == 'followed-group'){
		document.getElementById('followed-group').style.display = 'none';
		document.getElementById('follow-group').style.display = 'block';
	}
	if(e.target.className == 'groupImg'){
		document.getElementsByClassName('group-right')[0].innerHTML = groupinHTML;
		var src = '';
		for(i = 0; i < groups.length; i++){
			if(groups[i].id == e.target.id){
				src = groups[i].img;
			}
		}
		
		document.getElementsByClassName('group-background-img')[0].src = src;
	}
	
	
});


var checked = 0;
function displayAllGroups(){
	var buttons = document.getElementsByClassName("category");	
	for(j = 0; j < buttons.length; j++){
		buttons[j].style.backgroundColor='white';
		buttons[j].style.color='black';
		buttons[j].style.display='block';
	}
	var groups = document.getElementsByClassName("group");
	for(i = 0; i < groups.length; i++){
		groups[i].style.display = "block";
	}
}
function removeAllGroups(){
	var groups = document.getElementsByClassName("group");
	for(i = 0; i < groups.length; i++){
		groups[i].style.display = "none";
	}
}

function filterGroups(e, id){
	var type = 'group ' + id;
	console.log(type);
	var groupDivs = document.getElementsByClassName(type);
	console.log(groupDivs.length);
	if(checked == 0){
		removeAllGroups();
	}
	if(e.target.getAttribute("checked") == "no"){
		checked += 1;
		for(i = 0; i < groupDivs.length; i++){
			groupDivs[i].style.display = 'block';
			
		}
		e.target.setAttribute("checked", "yes");
		e.target.style.backgroundColor = '#536272';
	 	e.target.style.color = 'white';
	} else {	
		e.target.setAttribute("checked", "no");
		checked -= 1;
		if(checked == 0){
			displayAllGroups();
		} else {
			for(i = 0; i < groupDivs.length; i++){
				groupDivs[i].style.display = 'none';
				
			}
			e.target.style.backgroundColor = 'white';
			e.target.style.color = 'black';
		}
	}
}

function loadGroups(){
	for(i = 0; i < groups.length; i++){
		var group = groups[i];
		var div = document.createElement('div');
		div.className = 'group ' + group.category;
		var img = document.createElement('img');
		img.src = group.img;
		img.className = 'groupImg';
		img.id = group.id;
		var h3 = document.createElement('h3');
		h3.className = 'groupTitle';
		h3.innerHTML  = group.name;
		
		var p = document.createElement('p');
		p.innerHTML = group.description;
		p.className = 'groupDescription';
		div.appendChild(img);
		div.appendChild(h3);
		
		div.appendChild(p);
		document.getElementsByClassName('group-list')[0].appendChild(div);

	}
}