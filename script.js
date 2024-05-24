const chk = document.getElementById('check');

chk.addEventListener('change', () =>{
    document.body.classList.toggle('light');
    document.querySelector('.container').classList.toggle('light');
    document.querySelector('.widget__1').classList.toggle('light');
    document.querySelector('.github').classList.toggle('light');
    document.querySelector('.linkedin').classList.toggle('light');
    document.querySelector('.instagram').classList.toggle('light');
    document.querySelector('.widget__3').classList.toggle('light');
    document.querySelector('.widget__4').classList.toggle('light');
    document.querySelector('.widget__5').classList.toggle('light');
});