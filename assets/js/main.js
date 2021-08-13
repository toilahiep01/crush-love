// CONFIG DATA 
const CONFIGDATA = {
    titleHeader: 'Thấy hiệp đẹp trai không',
    descriptionHeader: 'Nếu bạn thoát và không trả lời câu hỏi thì bạn tự nhận tôi đẹp trai rồi nhé hehe ^^',
    buttonYes: 'Đẹp trai',
    buttonNo: 'Không! Bạn xấu vl.',
    titleModar: 'Cảm ơn em vì đã khen tôi đẹp trai hehe',
    descriptionModar: 'Tớ biết là bạn sẽ khen tôi đẹp trai mà ^^ </br> Cám ơn bạn vì đã khen tôi đẹp trai :)) </br> "Tôi biết tôi đẹp trai mà đừng khen nữa. </br> Ngại lắm hehe "',
};



















// Không được thay đổi ở đây - Not to change
$(document).ready(function() {setTimeout(function() {$('.spinner').fadeOut();$('#preloader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow': 'visible'})}, 600)});

function start(data) {
    var btnYes = document.querySelector('.btn--yes');
    var btnNo = document.querySelector('.btn--no');
    var popup = document.querySelector('.modal');
    var overlay = document.querySelector('.modal__overlay');
    var btnClose = document.querySelector('.btn-close');
    var headerModar = document.querySelector('.heading-name');
    var desccriptionModar = document.querySelector('.message');

    window.onload = () => {
        document.querySelector('.music').play()
        document.querySelector('.music').volume = 1
    };
    window.onkeypress = (e) => {
        if (e.charCode === 32) {
            document.querySelector('.music').play();
        }
    };

    document.querySelector('.header').innerHTML = `
        <h1 class="header-name">
            ${data.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${data.descriptionHeader}
            <i class="ti-face-smile"></i>
        </p>`;
    btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${data.buttonYes}`;
    btnNo.innerHTML =  ` <i class="ti-thumb-down"></i> ${data.buttonNo}`;
    headerModar.innerHTML = `${data.titleModar} <i class="ti-heart"></i>`;
    desccriptionModar.innerHTML = `${data.descriptionModar}`

    btnYes.onclick = () => {
        popup.classList.add('show');
    };
    btnClose.onclick = () => {
        popup.classList.remove('show');
    };

    overlay.onclick = () => {
        popup.classList.remove('show');
    };

    btnNo.onclick = () => {
        btnNo.style.top = 100 + "px";
        btnYes.style.top = 280 + "px";

    };

    btnNo.onmouseover = (e) => {
        var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
        var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
        btnNo.style.top = x + "px";
        btnNo.style.right = y + "px";
    };

};

start(CONFIGDATA);

