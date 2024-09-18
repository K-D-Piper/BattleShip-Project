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

let isHit = Math.random(0, 1)
let battleButtons = document.querySelector('.myButtons');
//debugger

switch (isHit > .5) {
    case (true):
            battleButtons.addEventListener('click', () => {
                console.log("hit")
                alert("You HIT my battleship!")
                battleButtons.style.backgroundColor = 'green'
                battleButtons.style.color = 'green'
            })
    break;
        case (false):
                battleButtons.addEventListener('click', () => {
                    console.log("miss")
                    alert("HA! MISSED!")
                    battleButtons.style.backgroundColor = 'red'
                    battleButtons.style.color = 'red'
            })
        break;
    default:
        console.log("i no worky")
        break;
}