/*
//naming variables START

//Getting with Query Selector 

let hits = document.querySelectorAll('.hit');
let misses= document.querySelectorAll('.miss');
let resetId = document.getElementById("resetId")
//naming variables END

/*
//reset START

resetId.addEventListener("click", () => {
    button.resetId.reset(hits, misses);
})

document.getElementById("resetId").onclick = reset;

// END (doesn't work yet)


//Functions START

hits.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hit")
        alert("You HIT my battleship!")
        button.style.backgroundColor = 'green'
        button.style.color = 'green'
    })
});

misses.forEach(button => {
    button.addEventListener('click', () => {
        console.log("miss")
        alert("HA! MISSED!")
        button.style.backgroundColor = 'red'
        button.style.color = 'red'
    })
});

//Functions END

*/ //everything above works. Just randominzing now.

//Ramdomizing Squares START

//needs to use Math.random()
    //Math.random() returns a random number lower than 1 

let battleButtons = document.querySelectorAll('.myButtons');

console.log(battleButtons)
//debugger

for (let i = 0; i < battleButtons.length; i++) {
    const element = battleButtons[i];

let isHit = Math.random(0, 9)
console.log(isHit)    
switch (isHit >= .8) {
    case (true):
            battleButtons[i].addEventListener('click', () => {
                console.log("hit")
                alert("You HIT my battleship!")
                battleButtons[i].style.backgroundColor = 'green'
                battleButtons[i].style.color = 'green'
            })
    break;
        case (false):
                battleButtons[i].addEventListener('click', () => {
                    console.log("miss")
                    alert("HA! MISSED!")
                    battleButtons[i].style.backgroundColor = 'red'
                    battleButtons[i].style.color = 'red'
            })
        break;
    default:
        console.log("i no worky")
        break;
}

}
