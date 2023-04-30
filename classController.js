import wordlist from "./wordlist.js";

var rollBtn = document.getElementById('roll');
var noOfWords = 5;
document.querySelector(".words").innerHTML = noOfWords;

document.querySelectorAll(".words-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        noOfWords = this.innerHTML;
        document.querySelector(".words").innerHTML = noOfWords;
    })
})

rollBtn.onclick = async function () {

    document.querySelector("#roll").style.display = "none";
    document.querySelector("#loading").style.display = "block";

    document.querySelector("thead").querySelector("tr").innerHTML = "";
    document.querySelector("tbody").querySelector("tr").innerHTML = "";

    document.querySelector("#passphrase").style.display = "none";

    let word = "";
    for (var i = 0; i < noOfWords; i++) {
        word = "";
        document.querySelectorAll(".container").forEach(function (container) {
            var dice = Math.floor((Math.random() * 6) + 1);
            word += dice;
            for (var i = 1; i <= 6; i++) {
                container.querySelector(".dice").classList.remove('show-' + i);
                if (dice === i) {
                    container.querySelector(".dice").classList.add('show-' + i);
                }
            }
        })

        await sleep(1200);
        document.querySelector("thead").querySelector("tr").innerHTML += `<td>${word}</td>`;
        document.querySelector("tbody").querySelector("tr").innerHTML += `<td class="single-word">${wordlist[word]}</td>`;
        await sleep(200);
    }
    document.querySelector("#roll").style.display = "block";
    document.querySelector("#loading").style.display = "none";

    displayPassphrase();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayPassphrase() {
    let passphrase = "";
    
    document.querySelector("#passphrase").style.display = "block";

    document.querySelectorAll(".single-word").forEach(function(word) {
        passphrase += word.innerHTML;
    });

    document.querySelector(".final-passphrase").innerHTML = passphrase;
}