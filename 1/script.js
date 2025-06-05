
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
iconCart.addEventListener('click', ()=>{
    if (cart.style.rtght == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(0)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translatateX(0)';
    }
})
close.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})
alert("wellcome to vibol shop pls click on ok for cheeck the website")