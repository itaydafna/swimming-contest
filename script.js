var pool = document.getElementById("pool"),
    go = document.getElementById("go"),
    swimmerOne = document.getElementById("one"),
    swimmerTwo = document.getElementById("two"),
    swimmerThree = document.getElementById("three"),
    swimmerFour = document.getElementById("four");
    referee = document.getElementById("referee");
    gunShot = new Event ("gunShot");


function dispatchGunShot () {
    referee.style.backgroundImage="url('yosemitesam02.gif')";
    referee.style.height="180px";
    referee.style.width="220px";
    setInterval(function(){referee.dispatchEvent(gunShot)},400);
}



function swimRandomPace(el) {
        if (el.style.marginLeft === "") {
            el.style.marginLeft = 0
        }
        var randMs = 50*Math.random();
        helper.animate(el, function (el) {
            if (parseInt(el.style.marginLeft,0)>=860){return};
            var marL = parseInt(el.style.marginLeft, 10) + 3;
            el.style.marginLeft = marL + "px";
        }, randMs);

}




go.addEventListener('click',dispatchGunShot)


referee.addEventListener('gunShot',function(){swimRandomPace(swimmerOne)});
referee.addEventListener('gunShot',function(){swimRandomPace(swimmerTwo)});
referee.addEventListener('gunShot',function(){swimRandomPace(swimmerThree)});
referee.addEventListener('gunShot',function(){swimRandomPace(swimmerFour)});



