console.log("Welcome To Gambling Simulator")

//constants
const EVERY_DAY_STAKE=100
const BET=1

//variables
cash=EVERY_DAY_STAKE

var RandomValue = Math.random()

//Function to check win or loss 
function dailyBet()
{
	if (RandomValue < 0.5 ) {
		console.log("Win")
        cash += BET
    }
	else {
		console.log("Lose")
        cash -= BET
    }
}

dailyBet()