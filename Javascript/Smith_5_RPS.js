function myFunction() {
    document.getElementById("sample").innerHTML = "Change the text";

}



function maChoice(a) {
        if (a == 0) {
        document.getElementById("player").innerHTML = "You chose rock!";
        } else if (a == 1) {
            document.getElementById("player").innerHTML = "You chose paper!";
        } else if (a == 2 ) {
            document.getElementById("player").innerHTML = "you chose scissors!";
        }
}