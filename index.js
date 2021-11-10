
var image_one = document.querySelector('.img1');
var image_second = document.querySelector('.img2');
var winner = document.querySelector('.declare');

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    const n1 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;

    if (n1 > n2) {
        winner.innerHTML = "🚩 Player 1 Wins";
    } else if (n1 == n2) {
        winner.innerHTML = " Draw ";
    }
    else {
        winner.innerHTML = "Player 2 Wins! 🚩";
    }

    console.log(n1);
    console.log(n2);

    console.log("./images/dice`${n1}`.png");
    console.log(`./images/dice${n2}.png`);

    image_one.setAttribute("src", `./images/dice${n1}.png`);
    image_second.setAttribute("src", `./images/dice${n2}.png`);
}

