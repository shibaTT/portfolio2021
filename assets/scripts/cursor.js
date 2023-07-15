var 
    cursor = document.getElementById("cursor"),
    follower = document.getElementById("follower"),
    cWidth = 8, //カーソルサイズ、CSSの.followerと同じ値にする
    fWidth = 40, //後ろのカーソルサイズ
    mouseX = 0,
    mouseY = 0,
    chaserX = 0,
    chaserY = 0,
    delay = 10; //後ろからついてくるカーソルのdelay

gsap.to({}, .0011, {
    repeat: -1,
    onRepeat: function() {
        chaserX += (mouseX - chaserX) / delay;
        chaserY += (mouseY - chaserY) / delay;
        
        gsap.set(cursor, {
            css: {
                x: mouseX - (cursor.clientWidth / 2),
                y: mouseY - (cursor.clientHeight / 2)
            }
        });
        
        gsap.set(follower, {
            css: {
                x: chaserX - (follower.clientWidth / 2),
                y: chaserY - (follower.clientHeight / 2)
            }
        });
    }
})

$(document).on('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    /*mouseX = e.pageX;
    mouseY = e.pageY;
    
    cursor.css({
        //カーソルの位置を決める。cssのプロパティ書き換え。高さと横を半分にして中央寄せ。
        left: mouseX - (cWidth / 2),
        top: mouseY - (cWidth / 2)
    });
    
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    
    follower.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    
    
    $("a").on({
        "mouseenter": function() {
            // cur.addClass("is-active");
            // fol.addClass("is-active");
            cursor.classList.add('is-active');
            follower.classList.add('is-active');
        },
        "mouseleave": function() {
            // cur.removeClass("is-active");
            // fol.removeClass("is-active");
            cursor.classList.remove('is-active');
            follower.classList.remove('is-active');
        }
    });*/
});

$("a").on({
    "mouseenter": function() {
        // cur.addClass("is-active");
        // fol.addClass("is-active");
        cursor.classList.add('is-active');
        follower.classList.add('is-active');
    },
    "mouseleave": function() {
        // cur.removeClass("is-active");
        // fol.removeClass("is-active");
        cursor.classList.remove('is-active');
        follower.classList.remove('is-active');
    }
});

$(".jsButton").on({
    "mouseenter": function() {
        // cur.addClass("is-active");
        // fol.addClass("is-active");
        cursor.classList.add('is-active');
        follower.classList.add('is-active');
    },
    "mouseleave": function() {
        // cur.removeClass("is-active");
        // fol.removeClass("is-active");
        cursor.classList.remove('is-active');
        follower.classList.remove('is-active');
    }
});
