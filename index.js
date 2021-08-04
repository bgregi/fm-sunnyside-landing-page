let menuDiv = document.getElementById("menu-div")

function toggleMenuDiv() {
    if (menuDiv.style.display == "block" || !menuDiv.style.display) {
        menuDiv.style.display = "none"

        console.log("primeira condição")
    } else {
        menuDiv.style.display = "block"

        console.log("segunda condição")
    }
}

let menuButton = document.getElementById("menu-img")
menuButton.addEventListener("click", toggleMenuDiv)