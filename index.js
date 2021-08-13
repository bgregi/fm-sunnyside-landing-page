let menuDiv = document.getElementById("menu-div")

let iconFb = document.getElementById("facebook")
let iconIg = document.getElementById("instagram")
let iconTwitter = document.getElementById("twitter")
let iconPinterest = document.getElementById("pinterest")

function toggleMenuDiv() {
    if (window.screen.width < 800) {
        if (menuDiv.style.display == "block" || !menuDiv.style.display) {
            menuDiv.style.display = "none"

            console.log("primeira condição")
        } else {
            menuDiv.style.display = "block"

            console.log("segunda condição")
        }
    } else {
        menuDiv.style.display = "block"
    }
}

let menuButton = document.getElementById("menu-img")
menuButton.addEventListener("click", toggleMenuDiv)

function iconHighlight(event) {
    event.target.src = "images/icon-" + event.target.id + "-white.svg"
}
function iconHighlightOut(event) {
    event.target.src = "images/icon-" + event.target.id + ".svg"
}

iconFb.addEventListener("mouseover", iconHighlight)
iconIg.addEventListener("mouseover", iconHighlight)
iconTwitter.addEventListener("mouseover", iconHighlight)
iconPinterest.addEventListener("mouseover", iconHighlight)

iconFb.addEventListener("mouseleave", iconHighlightOut)
iconIg.addEventListener("mouseleave", iconHighlightOut)
iconTwitter.addEventListener("mouseleave", iconHighlightOut)
iconPinterest.addEventListener("mouseleave", iconHighlightOut)