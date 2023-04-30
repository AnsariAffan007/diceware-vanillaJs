function loadDices(button) {
    let diceContainer = document.querySelector(".dice-container");
    diceContainer.innerHTML = "";
    for (var i = 1; i <= 5; i++) {
        diceContainer.innerHTML += `
        <div class="container">
            <div id='dice${i}' class="dice dice-${i}">
                <div id="dice-${i}-side-one" class='side one'>
                    <div class="dot one-1"></div>
                </div>
                <div id="dice-${i}-side-two" class='side two'>
                    <div class="dot two-1"></div>
                    <div class="dot two-2"></div>
                </div>
                <div id="dice-${i}-side-three" class='side three'>
                    <div class="dot three-1"></div>
                    <div class="dot three-2"></div>
                    <div class="dot three-3"></div>
                </div>
                <div id="dice-${i}-side-four" class='side four'>
                    <div class="dot four-1"></div>
                    <div class="dot four-2"></div>
                    <div class="dot four-3"></div>
                    <div class="dot four-4"></div>
                </div>
                <div id="dice-${i}-side-five" class='side five'>
                    <div class="dot five-1"></div>
                    <div class="dot five-2"></div>
                    <div class="dot five-3"></div>
                    <div class="dot five-4"></div>
                    <div class="dot five-5"></div>
                </div>
                <div id="dice-${i}-side-six" class='side six'>
                    <div class="dot six-1"></div>
                    <div class="dot six-2"></div>
                    <div class="dot six-3"></div>
                    <div class="dot six-4"></div>
                    <div class="dot six-5"></div>
                    <div class="dot six-6"></div>
                </div>
            </div>
        </div>
        `
    }
}
loadDices();