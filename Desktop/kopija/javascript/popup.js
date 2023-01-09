document.getElementById('login').addEventListener('click',function(){
    document.querySelector('.popup-login').style.display = 'flex';
})

document.getElementById('signup').addEventListener('click',function(){
    document.querySelector('.popup-signup').style.display = 'flex';
})

document.getElementById('closeS').addEventListener('click',function(){
    document.querySelector('.popup-signup').style.display = 'none';
})

document.getElementById('closeL').addEventListener('click',function(){
    document.querySelector('.popup-login').style.display = 'none';
})