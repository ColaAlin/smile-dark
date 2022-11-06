let night = 0;
const btn = document.querySelector("svg");
btn.addEventListener("click", function (n) {
    night = !night;
    if (night) {
        document.body.classList.add("night");
        btn.classList.add("night");
        document.title = "Buhuhu";
    } else {
        document.body.classList.remove("night");
        btn.classList.remove("night");
        document.title = "Yuhu !";
    }
});