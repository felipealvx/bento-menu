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

//////////////// WIDGET 4 : MOSTRANDO AS HORAS //////////////////

function startTime(){
    let today=new Date();
    let hours = today.getHours();
    let min = today.getMinutes();

    min = checkTime(min);

    document.getElementById('txt').innerHTML = hours + ":" + min;
    time = setTimeout('startTime()', 500);
}
function checkTime(i){
    if (i<10){
        i="0"+i;
    } return i;
}
