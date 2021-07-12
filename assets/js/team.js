var teamWidth = document.querySelector(".team_slide img").clientWidth;
var teamSlide = document.querySelector(".team_slide");
var lengthSlide = document.querySelectorAll(".team_slide img").length;
var team = 0;
var preTeam = function () {
    if (team != 0) {
        team -= teamWidth;
        teamSlide.style.marginLeft = "-" + team + "px";
    } else {
        team = (lengthSlide - 1) * teamWidth;
        teamSlide.style.marginLeft = "-" + team + "px";
    }
};
var nextTeam = function () {
    if (team < (lengthSlide - 1) * teamWidth) {
        team += teamWidth;
        teamSlide.style.marginLeft = "-" + team + "px";
    } else {
        team = 0;
        teamSlide.style.marginLeft = "-" + team + "px";
    }
};
setInterval(nextTeam, 2000);