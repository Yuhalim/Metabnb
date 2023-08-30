var button = document.getElementById('btn');
var connect = document.getElementById('connect');
var overlay = document.getElementById('overlay');
button.addEventListener('click', function(){
    connect.style.display= 'block';
    overlay.style.display = 'block';
});
var hide = document.querySelector('#hide');
hide.addEventListener('click', function(){
    connect.style.display = 'none';
    overlay.style.display = 'none';

});

