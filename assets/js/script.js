//   https://scrollrevealjs.org/guide/customization.html
//　ふわっとmove加工

ScrollReveal({
    reset: true, 
    distance: "30px" 
});

ScrollReveal().reveal('h3', {
    delay:300,
    origin: "top"
});

ScrollReveal().reveal(".story p, .ex1 p, .ex2 p, .ex3 p, .want p, .question p ",  {
    delay:100,
    origin: "bottom"
});

//文字のふわっとmove完了


//ハンバーガー
$(function(){
    $('#js-hamburger-menu, .navigation__link').on('click',function(){
        $('.navigation').slideToggle(300)
        $('.hamburger-menu').toggleClass('hamburger-menu--open');
    });
});


//スライドショー

const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 入力中に画面を離れる場合の確認ダイアログ
window.addEventListener('beforeunload', function (e) {
    if (document.querySelector('#Form').checkValidity()) {
        e.preventDefault();
        e.preventDefault() = '入力中のデータが失われる可能性があります。本当に移動してもよろしいですか？';
    }
});