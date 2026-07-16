if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["&#128293;|", "&#128293; ?|", "&#128293; S|", "&#128293; Sk|", "&#128293; Sky|", "&#128293; Sky|", "&#128293; SkyB|", "&#128293; SkyBl|", "&#128293; SkyBlo|", "&#128293; SkyBloc|", "&#128293; SkyBlock|", "&#128293; SkyBlockH|", "&#128293; SkyBlockHa|", "&#128293; SkyBlockHav|", "&#128293; SkyBlockHave|", "&#128293; SkyBlockHaven|", "&#128293; SkyBlockHaven", "&#128293; SkyBlockHaven", "&#128293; SkyBlockHaven", "&#128293; SkyBlockHaven","&#128293; SkyBlockHaven|","&#128293; SkyBlockHave|","&#128293; SkyBlockHav|","&#128293; SkyBlockHa|","&#128293; SkyBlockH|","&#128293; SkyBlock|","&#128293; SkyBloc|", "&#128293; SkyBlo|", "&#128293; SkyBl|", "&#128293; SkyB|", "&#128293; Sky|", "&#128293; Sk|", "&#128293; S|", "&#128293; |", "&#128293;|", "&#128293; .|", "&#128293; $|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

