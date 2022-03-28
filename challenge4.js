// Get an array action
let arrayAction = document.getElementsByTagName("img")

// Variable User
let playerChoice = null
let computerChoice = null

// Variable Status
let result = null 
let gameStatus = document.getElementsByClassName("status")[0]

// Variable Action Icon
let rockPlayer = arrayAction[1]
let paperPlayer = arrayAction[2]
let scissorsPlayer = arrayAction[3]
let rockComp = arrayAction[4]
let paperComp = arrayAction[5]
let scissorsComp = arrayAction[6]
let refreshButton = arrayAction[7]

// Function to disable another event
function disableNextEvent () {
    rockPlayer.parentElement.style.pointerEvents = "none"
    paperPlayer.parentElement.style.pointerEvents = "none"
    scissorsPlayer.parentElement.style.pointerEvents = "none"
}

// Function to Random Com Action
let arrayRandom = [rockComp, paperComp, scissorsComp] // Array of Computer Actions to Randomized
const compRandom = function () {
    const randomValue = Math.floor(Math.random() * arrayRandom.length) // get a random value for index
    computerChoice = arrayRandom[randomValue] // assign Computer action
    return computerChoice
}

// Function to Change Computer Icon Background
function changeBkgndColor() {
    for (let i = 0; i < 8; i++) {
        let a = Math.floor(Math.random() * arrayRandom.length)
        setTimeout(function() {
            arrayRandom[a].parentElement.style.backgroundColor= "#ccc"; // change background color to white-grey
        }, (i+1) * 200);
        setTimeout(function() {
            arrayRandom[a].parentElement.style.backgroundColor="transparent" // change background color to transparent
        }, (i+2) * 200 - 100);
    }
    setTimeout(function() {
        computerChoice.parentElement.style.backgroundColor = "#ccc" // change computer final action background color to white-grey
    }, 1700)
}

// Function Show Result
function winningStatus () {
    setTimeout(function() {
        gameStatus.classList.remove("status") // remove class contains css style for gameStatus
        if (result === "win") {
            gameStatus.innerHTML = "PLAYER 1<br>WIN" // change match result text for win condition
            gameStatus.classList.add("resultStatus") // add class contain new css style for match result
            gameStatus.style.backgroundColor = "#4C9654" // change background color for match result
        } else if (result === "draw") { 
            gameStatus.innerHTML ="DRAW" 
            gameStatus.classList.add("resultStatus")
            gameStatus.style.backgroundColor = "#035B0C"
        } else {
            gameStatus.innerHTML = "COM<br>WIN"
            gameStatus.classList.add("resultStatus")
            gameStatus.style.backgroundColor = "#4C9654"
        }
    }, 1800); // delay time for match result output in milisecond
    
}

// After Player Action
rockPlayer.addEventListener ("click", function() { // event for clicking rock
    playerChoice = rockPlayer // assign Player action to variable
    console.log("PLAYER 1 Choose ROCK"); // display User Choice in Terminal
    rockPlayer.parentElement.style.backgroundColor = "#ccc" // change icon background color of chosen action to white-grey
    disableNextEvent() // run function which disable next click event
    compRandom() // run function which randomize computer action 
    changeBkgndColor() // run function for background color change animation

    // Conditional Statement for Result 
    if (computerChoice === scissorsComp) {
        result = "win"
        winningStatus()
        console.log("PLAYER 1 Win"); // display the match result in Terminal
    } else if (computerChoice === rockComp) {
        result = "draw"
        winningStatus()
        console.log("The Result is Draw");
    } else {
        result = "lose"
        winningStatus()
        console.log("COMPUTER Win");
    }
})

paperPlayer.addEventListener ("click", function() { // event for clicking paper
    playerChoice = paperPlayer
    console.log("Player 1 Choose PAPER");
    paperPlayer.parentElement.style.backgroundColor = "#ccc"
    disableNextEvent()
    compRandom()
    changeBkgndColor()

    // Conditional Statement for Result 
    if (computerChoice === rockComp) {
        result = "win"
        winningStatus()
        console.log("PLAYER 1 Win");
    } else if (computerChoice === paperComp) {
        result = "draw"
        winningStatus()
        console.log("The Result is Draw");
    } else {
        result = "lose"
        winningStatus()
        console.log("COMPUTER Win");
    }
})

scissorsPlayer.addEventListener ("click", function() { // event for clicking scissors
    playerChoice = scissorsPlayer
    console.log("PLAYER 1 Choose SCISSORS");
    scissorsPlayer.parentElement.style.backgroundColor = "#ccc"
    disableNextEvent()
    compRandom()
    changeBkgndColor()
    
    // Conditional Statement for Result 
    if (computerChoice === paperComp) {
        result = "win"
        winningStatus()
        console.log("PLAYER 1 Win");
    } else if (computerChoice === scissorsComp) {
        result = "draw"
        winningStatus()
        console.log("The Result is Draw");
    } else {
        result = "lose"
        winningStatus()
        console.log("COMPUTER Win");
    }
})


// After Player Click Refresh Button
refreshButton.addEventListener ("click", function () {
    if (playerChoice != null && computerChoice != null) { // condition to anticipate clicking refresh before playing
        gameStatus.innerHTML = "VS" // change gameStatus text to its initial value
        gameStatus.classList.remove("resultStatus") // remove the class with new css style for game result after playing
        gameStatus.classList.add('status') // add original class with css style for gameStatus
        gameStatus.style.backgroundColor = "transparent"
        playerChoice.parentElement.style.backgroundColor = "transparent"
        computerChoice.parentElement.style.backgroundColor = "transparent"        
    }

    // enable the click event for player action again 
    rockPlayer.parentElement.style.pointerEvents = "auto"
    paperPlayer.parentElement.style.pointerEvents = "auto"
    scissorsPlayer.parentElement.style.pointerEvents = "auto"
})