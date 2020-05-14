console.log("Welcome To Gambling Simulator")

//constants
const EVERY_DAY_STAKE = 100
const BET = 1 
const TOTAL_DAYS = 20
const LOWER_PERCENT = EVERY_DAY_STAKE - (EVERY_DAY_STAKE * 50 /100)
const UPPER_PERCENT = EVERY_DAY_STAKE + (EVERY_DAY_STAKE * 50 /100)

//variables
var cash
var totalAmount = 0
var gainCash

var dict = {};

//Function to check win or loss 
function dailyBet()
{
    gainCash=0
    cash = EVERY_DAY_STAKE
    while( cash > LOWER_PERCENT && cash < UPPER_PERCENT ) {
        var RandomValue = Math.random()
        if (RandomValue < 0.5 ) {
            cash += BET
        }
        else {
            cash -= BET
        }
    }
    gainCash = cash - EVERY_DAY_STAKE
    return gainCash
}

//function for Monthly Bet
function monthlyGambling() {
    for( day = 1; day <= TOTAL_DAYS; day++ ) {
        var cash = dailyBet()
        //storing Each Day amount in Dictionary
        dict["Day "+day] = cash
        totalAmount = totalAmount + dict["Day "+day]
        console.log("Day "+day+" = "+dict["Day "+day])
    }

    if( totalAmount > 0 ) {
        console.log("Total Amount Won In 20 Days "+totalAmount)
    }
    else {
        console.log("Total Amount Loose in 20 Days "+totalAmount)
    }
}

monthlyGambling()