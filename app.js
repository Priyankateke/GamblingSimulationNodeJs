//welcome message
console.log("Welcome To Gambling Simulator")

//access file : gamblingSimulator
const GamblingSimulator = require('./gamblingSimulator')

//object of class 
const gamblingSimulator = new GamblingSimulator();

//start Game
gamblingSimulator.playNextMonth()


