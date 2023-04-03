let raceNumber = Math.floor(Math.random() * 1000);

// Variable to indicate if runners registered early
let registerEarly = true

let runnersAge = 20

//Adds 1000 to registration number
if (registerEarly && runnersAge > 18) {
  raceNumber += 1000;
}

//Logs statement based on registration time and age
if (registerEarly && runnersAge > 18) {
  console.log(`${raceNumber} will race at 9:30am!`)
} else if (!registerEarly && runnersAge > 18) {
  console.log(`${raceNumber} will race at 11:00pm!`)
}

//Logs statement based on registration time and age
if (runnersAge < 18) {
   console.log(`${raceNumber} will race at 12:30pm!`)
} else if(runnersAge === 18){
  console.log('See registration Desk!')
}
