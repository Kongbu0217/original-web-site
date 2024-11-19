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
    delay:300,
    origin: "bottom"
});

//文字のふわっとmove完了
