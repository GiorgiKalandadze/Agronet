
 // <div class="post">
 //          <div class="postfirstRow">
 //            <img class="postAvatar" src="../Images/People/farmer3F.jpg">
 //            <p class="postAuthorName">Nino Menabdze</p>
 //            <p class="postDate">24 Nov</p>
 //          </div>
 //          <hr class="postHR">
 //          <div class="postSecondRow">
 //          <p class="postText">
 //            Aenean vel nunc quam. Sed a enim lacinia, condimentum nisl vel, commodo dui. Maecenas luctus orci non leo consectetur, consequat dictum ipsum eleifend.
 //          </p>
 //          </div>
 //          
 //        </div>

function loadPosts(){
	var currPost;
	console.log('1');
	for(i = 0; i < posts.length; i++){
		currPost = posts[i];
		//First Row
		var divPost = document.createElement('div');
		divPost.className = "post";
		var divPFR = document.createElement('div');
		divPFR.className = "postfirstRow";
		var imgAvatar = document.createElement('img');
		imgAvatar.className = "postAvatar";
		imgAvatar.src = "../Images/People/" + profiles[currPost.author_id].img;
		imgAvatar.alt = profiles[currPost.author_id].name + " " + profiles[currPost.author_id].surname;
		var pName = document.createElement('p');
		pName.className = "postAuthorName";
		pName.innerHTML = profiles[currPost.author_id].name + " " + profiles[currPost.author_id].surname;
		var pDate = document.createElement('p');
		pDate.className = "postDate";
		pDate.innerHTML = currPost.date;
		var hr = document.createElement('hr');
		hr.className = "postHR";
		divPFR.appendChild(imgAvatar);
		divPFR.appendChild(pName);
		divPFR.appendChild(pDate);
		//Second Row
		var divPSR = document.createElement('div');
		divPSR.className = "postSecondRow";
		var pText = document.createElement('p');
		pText.className = "postText";
		pText.innerHTML = currPost.text;
		divPSR.appendChild(pText);
		//Thrid Row
 		var divPTR = document.createElement('div');
 		divPTR.className = "postThirdRow";
 		//Check Images
 		if(currPost.img.length > 0){
			for(j = 0; j < currPost.img.length; j++){
				var img = document.createElement('img');
				img.src = "../Images/Posts/" + currPost.img[j];
				img.className = "postImg";
				img.alt = currPost.img[0];
				divPTR.appendChild(img);
			}
		}
		//Check Video



		var button1 = document.createElement('button');
		button1.className = "postButton";

		var i1 = document.createElement('i');
		i1.className = "fas fa-thumbs-up";
		button1.appendChild(i1);
		var label1 = document.createElement('label');
		label1.className = "post-button-text";
		label1.id = "post-button-like";
		label1.innerHTML = "Like";
		button1.appendChild(label1);
		var button2 = document.createElement('button');
		button2.className = "postButton";
		var i2 = document.createElement('i');
		i2.className = "fas fa-bookmark";
		var label2 = document.createElement('label');
		label2.className = "post-button-text";
		label2.id = "post-button-save";
		label2.innerHTML = 'Save';
		button2.appendChild(i2);
		button2.appendChild(label2);

		divPost.appendChild(divPFR);
		divPost.appendChild(divPSR);
		divPost.appendChild(divPTR);

		divPost.appendChild(button1);
		divPost.appendChild(button2);

		console.log('2');
		//console.log(document.getElementsByClassName('containerPost')[0]);
		document.getElementsByClassName('containerPost')[0].appendChild(divPost);
		
	}
	console.log('3');

}