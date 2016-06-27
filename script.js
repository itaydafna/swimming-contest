var pool = document.getElementById("pool"),
    go = document.getElementById("go"),
    swimmerOne = document.getElementById("one"),
    swimmerTwo = document.getElementById("two"),
    swimmerThree = document.getElementById("three"),
    swimmerFour = document.getElementById("four");
    // referee = document.getElementById("referee");
    // // event = new Event ("gunShot");


function swimRandomPace(el) {
        if (el.style.marginLeft === "") {
            el.style.marginLeft = 0
        }
        var randMs = 50*Math.random();
        helper.animate(el, function (el) {
            if (parseInt(el.style.marginLeft,0)>=860){return true};
            var marL = parseInt(el.style.marginLeft, 10) + 3;
            el.style.marginLeft = marL + "px";
        }, randMs);

}


go.addEventListener('click',swimRandomPace(swimmerOne));
go.addEventListener('click',swimRandomPace(swimmerTwo));
go.addEventListener('click',swimRandomPace(swimmerThree));
go.addEventListener('click',swimRandomPace(swimmerFour));