const favColor = document.querySelector("#color")
const favPlace = document.querySelector("#place")
const favRitual = document.querySelector("#ritual")

function tellFavColor(evt) {
    evt.preventDefault();

    alert("My favorite color is maroon(hex-#330000).");
}

function tellFavPlace(evt) {
    evt.preventDefault();

    alert("My favorite place is the driving range.");
}

function tellFavRitual(evt) {
    evt.preventDefault();

    alert("My favorite ritual is watching a show at the end of the day to unwind.");
}

favColor.addEventListener("click",tellFavColor);
favPlace.addEventListener("click",tellFavPlace);
favRitual.addEventListener("click",tellFavRitual);