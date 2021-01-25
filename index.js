document.addEventListener('click', function (e){
    if(e.target.id === 'hello-button'){
        document.getElementById('text').innerHTML = 'HELLO';
    }
});