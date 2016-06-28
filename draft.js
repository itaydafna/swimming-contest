

function swimRandomPace(el) {
        if (el.style.marginLeft === "") {
            el.style.marginLeft = 0
        }

    var randMs = 50*Math.random();

    function swim (el) {
        if (parseInt(el.style.marginLeft,0)>=860){return true}
        else
        {var marL = parseInt(el.style.marginLeft, 10) + 3;
        el.style.marginLeft = marL + "px";
            randMs = 50*Math.random();
            helper.animate(el, swim (el), randMs);

        }
    }

        helper.animate(el, swim (el), randMs);
}
