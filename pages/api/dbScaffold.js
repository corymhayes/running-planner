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

const raceDayArray = foo => {
  const startDate = new Date(foo.startDate)
  const raceDate = new Date(foo.raceDate)
  const planDetails = [];

  for(let i = startDate.getMonth(); i <= raceDate.getMonth(); i++){
    if(i === startDate.getMonth()){
      for(let j = startDate.getDate(); j <= monthArray[i][1]; j++){
        planDetails.push(`${monthArray[i][0]} ${j}`)
      }
    } else if(i === raceDate.getMonth()){
      for(let j = 1; j <= raceDate.getDate(); j++){
        planDetails.push(`${monthArray[i][0]} ${j}`)
      }
    } else {
      for(let j = 1; j <= monthArray[i][1]; j++){
        planDetails.push(`${monthArray[i][0]} ${j}`)
      }
    }
  }
  return planDetails
}

export default raceDayArray