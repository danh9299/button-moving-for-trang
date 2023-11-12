const btnNo = document.getElementById('no');
btnNo.addEventListener('click', function () {
    btnNo.style.left = `${Math.ceil(Math.random() * 90)}%`;
    btnNo.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
btnNo.addEventListener('mouseover', function () {
    btnNo.style.left = `${Math.ceil(Math.random() * 90)}%`;
    btnNo.style.top = `${Math.ceil(Math.random() * 90)}%`;
})


const btnYes = document.getElementById('yes');

btnYes.addEventListener('click', function () {
   
    
         alert('Yêu thì ra đầu ngõ 109 Nguyễn Đình Thi điiiii');
})