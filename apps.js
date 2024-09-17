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
*/

//Functions START

hits.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hit")
        alert("You HIT my battleship!")
        button.style.backgroundColor = 'green'
    })
});

misses.forEach(button => {
    button.addEventListener('click', () => {
        console.log("miss")
        alert("HA! MISSED!")
        button.style.backgroundColor = 'red'
    })
});

//Functions END

//Ramdomizing Squares START

//needs to use Math.random()
    //Math.random() returns a random number lower than 1 


let all = Math.random()

    if (all > .1){
        console.log('hit')
    } else {
        console.log('miss')
    }



