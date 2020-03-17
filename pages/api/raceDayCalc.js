const monthArray = [
  ['Jan', 31],
  ['Feb', 29],
  ['Mar', 31],
  ['Apr', 30],
  ['May', 31],
  ['Jun', 30],
  ['Jul', 31],
  ['Aug', 31],
  ['Sep', 30],
  ['Oct', 31],
  ['Nov', 30],
  ['Dec', 31]
]
let planDetails = [];


const calculateRaceDay = start => {
  const startDate = new Date(start)
  let programDays = 84;
  let daysInMonth = 0;
  let daysLeftInMonth = 0;
  let daysLeft = 0;
  let fullMonths = 0;

  daysInMonth = monthArray[startDate.getMonth()][1];
  daysLeftInMonth = (daysInMonth - startDate.getDate())

  programDays = programDays - daysLeftInMonth;

  const calculateFullMonths = (a) => {
    for(let i = startDate.getMonth() + 1; i <= 11; i++){
      if(a > monthArray[i][1]){
        fullMonths++
        a = a - monthArray[i][1]
      }
    }

    return a;
  }

  const dayStart = calculateFullMonths(programDays)
  const monthStart = monthArray[startDate.getMonth() + (fullMonths + 1)][0]

  return {
    startDate: startDate,
    raceDate: new Date(`${monthStart} ${dayStart}, 2020`)
  }
}

export default calculateRaceDay