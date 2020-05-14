console.log("Welcome To Gambling Simulator")

//constants
const EVERY_DAY_STAKE=100
const BET=1 
const LOWER_PERCENT = EVERY_DAY_STAKE - (EVERY_DAY_STAKE * 50 /100)
const UPPER_PERCENT = EVERY_DAY_STAKE + (EVERY_DAY_STAKE * 50 /100)

//variables
cash=EVERY_DAY_STAKE

//Function to check win or loss 
function dailyBet()
{
    while( cash > LOWER_PERCENT && cash < UPPER_PERCENT ) {
        var RandomValue = Math.random()
        if (RandomValue < 0.5 ) {
            cash += BET
        }
        else {
            cash -= BET
        }
    }
}

dailyBet()