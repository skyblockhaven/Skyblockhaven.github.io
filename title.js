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

var titleText = ["&#128293;|", "&#128293; ?|", "&#128293; C|", "&#128293; Cr|", "&#128293; Cru|", "&#128293; Crus|", "&#128293; Crush|", "&#128293; Crushe|", "&#128293; Crushen|", "&#128293; Crushen", "&#128293; Crushen", "&#128293; Crushen", "&#128293; Crushen", "&#128293; Crushe|", "&#128293; Crush|", "&#128293; Crus|", "&#128293; Cru|", "&#128293; Cr|", "&#128293; C|", "&#128293; |", "&#128293;|", "&#128293; .|", "&#128293; $|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

