var defaultWidth = document.querySelector(".banner").clientWidth;
var changeSlide = document.querySelector(".banner_slide");
var countSlide = document.querySelectorAll(".banner_slide img").length;
var change = 0;
var preBtn = function () {
    if (change != 0) {
        change -= defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    } else {
        change = (countSlide - 1) * defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    }
};
var nextBtn = function () {
    if (change < (countSlide - 1) * defaultWidth) {
        change += defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    } else {
        change = 0;
        changeSlide.style.marginLeft = "-" + change + "px";
    }
};
setInterval(nextBtn, 4000);