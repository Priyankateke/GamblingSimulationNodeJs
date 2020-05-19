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

//dictionary
var sumOfBets = {};

class GamblingSimulator{
    /**
     * Function To calculate daily cash gain
     */
    dailyBet() {
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

    /**
     * Function To store cash in dictionary
     */
    monthlyGambling() {
        var day = 0
        sumOfBets["Day "+day]=0
        for( day = 1; day <= TOTAL_DAYS; day++ ) {
            var cash = this.dailyBet()
            //storing Each Day amount in Dictionary
            sumOfBets["Day "+day] = sumOfBets["Day "+(day-1)] + cash
        }
        this.sort()
    }

    /**
     * Sort dictionary
     */
    sort() {
        // Create amount array
        var amount = Object.keys(sumOfBets).map(function(key) {
            return [key, sumOfBets[key]];
        });
        
        // Sort the array based on the second element
        amount.sort(function(first, second) {
            return second[1] - first[1];
        });
        
        //display Luckiest Day
        console.log("Luckiest Day : ")
        console.log(amount.slice(0,1));
        
        //display Unluckiest Day
        console.log("Unluckiest Day : ")
        console.log(amount.slice(amount.length-2, amount.length-1));
    }

    /**
     * function To Start Game, if Player win continue play for next month
     */
    playNextMonth() {
        this.monthlyGambling() 
        var playAgain="n"
        
        //If Last month amount greater than 0, ask for play again
        while( sumOfBets['Day 20'] > 0) {
            console.log("Last Month Balance : "+sumOfBets['Day 20'])
            
            //user input
            const prompt = require('prompt-sync')();
            playAgain = prompt('Do you want to play again?');
            
            //if 'y' play again for next month
            if(playAgain == "y") {
                this.monthlyGambling()
            }
            else {
                return
            }
        }
    }
}

module.exports = GamblingSimulator
