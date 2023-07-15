let web_slider = new Swiper('.p-portfolio__slider-web', {
    loop: true,
    parallax:true,
    speed: 1000,
    
    autoplay: {
        delay: 5000,
    },
    
    //ページネーション表示の設定
    pagination: { 
        el: '.swiper-pagination', //ページネーションの要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
    },
    
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
});

let banner_slider = new Swiper('.p-portfolio__slider-banner', {
    loop: true,
    parallax:true,
    speed: 1000,

    autoplay: {
        delay: 4000,
    },

    //ページネーション表示の設定
    pagination: { 
        el: '.swiper-pagination', //ページネーションの要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
    },

    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
});