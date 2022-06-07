// Declaration section
const passwordBtn = document.getElementById("password-btn")
const dataDisplayElm = document.getElementById("dataDisplay-elm")
const elements2go = document.getElementsByClassName("pwDisplay")
let charsArray = []
let PWstring = ""

let forbiddenChars = [34,39,96] // numeric code for chars I don't want to use. 
let maxPWlength = 10

dataDisplayElm.innerText = maxPWlength
// Generate array of chars to be used in generating the passwords
for (let i = 33; i < 126; i++) {
    if (!forbiddenChars.includes(i)) {
        charsArray.push(String.fromCharCode(i))
    }
}

// event listeners for PWlength
dataDisplayElm.addEventListener("input", function() {
    maxPWlength = parseInt(dataDisplayElm.innerText)
})

dataDisplayElm.addEventListener('keydown', (evt) => {
    if (evt.key === 13) {
        evt.preventDefault()
    }
})

dataDisplayElm.addEventListener("focus", function(event) {
    dataDisplayElm.focus()
    console.log(event.target.id + " triggered event of type '" + event.type + "'")
})


// event listener for generate passwords button
passwordBtn.addEventListener("click", function(){
    generatePasswords()
})

// generate and render passwords
function generatePasswords() {
    // generate four password examples
    for (let j = 0; j < elements2go.length; j++) {

        // password length is determined by maxPWlength (UI-provided or default)
        for (let i = 0; i < maxPWlength; i++) {
            PWstring += charsArray[(Math.floor(Math.random()*charsArray.length))]
        }
        elements2go[j].innerText=PWstring
        PWstring = ""
    }
}

