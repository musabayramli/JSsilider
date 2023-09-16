const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const imgContainer = document.querySelector('.img-container');
const imgs = document.querySelectorAll('img');
let container = document.querySelector('.container');
let counter = document.querySelector('.counter');
let sliderContainer = document.querySelector('.slider-container');
let loadingBgFront = document.querySelector('.loadingBgFront');
let timeOut;
let currentImg = 1;
let number = 0;



setTimeout(changBg, 500)
function changBg() {
    updateNumber();
    container.style.color = '#fff'
    document.body.style.background = 'black'

    function updateNumber() {
        counter.textContent = number + '%';
        loadingBgFront.style.width= number +'%'
        number++
     
        if(number<101){
            setTimeout(updateNumber,15)
        }else if(number>100){
            container.style.display='none'
            document.body.style.background = 'transparent';
            sliderContainer.style.display= 'block'
        }
    }
}


next.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeOut)
    updateImg()
})
prev.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeOut)
    updateImg()
})


function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 600}px)`
    timeOut = setTimeout(() => {
        currentImg++;
        updateImg()
    }, 4000)
}

updateImg()