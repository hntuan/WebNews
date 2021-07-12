// header
window.addEventListener("scroll",function(){
    var header = document.querySelector(".header_sticky");
    header.classList.toggle("sticky",window.scrollY > 0);
})

//video
$(document).ready(function(){
    $('.list_video video').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('src');
        $('.main_video video').attr('src',src)
    })
});

