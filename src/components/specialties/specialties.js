const control = document.querySelector(".specialties__control__block");

document.addEventListener("DOMContentLoaded", function () {     
    var currentButton = getCurrentButton();
    var slider = document.getElementsByClassName("specialties__slider")[0];
    var pos = currentButton[2]*100;
    console.log("pos", pos);
    document.addEventListener("click", function (t) {
        if(t.target.id) {
            var slide = pos + (currentButton[2] - t.target.id[2]) * 100;
            slider.style.transform = "translate("+slide+"vw)";
            currentButton = getCurrentButton();
            pos = slide;
        }
    });
})

function getCurrentButton() {
    var controlBlock = document.getElementsByClassName("specialties__control__block");
    var buttons = controlBlock[0].getElementsByTagName("input");
    for(i = 0; i < buttons.length; i++)
        if(buttons[i].checked)
            return buttons[i].id;
}