import React, { useState } from 'react'
import Head from 'next/head'
import DatePicker from 'react-datepicker'
import raceDayCalc from './api/raceDayCalc'

const About = () => {

  const [ raceDay, setRaceDay ] = useState("")
  const [ raceDayFinal, setRaceDayFinal ] = useState('')

  const raceDayChange = date => {
    setRaceDay(date)
    setRaceDayFinal((raceDayCalc(date)))
  }

  const submitForm = async e => {
    e.preventDefault();

    // console.log(raceDayFinal);

    await fetch('http://localhost:3000/api/daily', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(raceDayFinal)
    })
  }



  return(

    <div>

    <Head>
      <title>About</title>
      <link rel="icon" href="" />
    </Head>
  
    <div>
      <form onSubmit={submitForm}>
        <label>Race Day</label><br />
        {/* <input type="text" value={raceDay} onChange={e => setRaceDay(e.target.value)}></input> */}
        <DatePicker selected={raceDay} isSelected={raceDay} onChange={raceDayChange} />
        <button type="submit">Submit</button>
      </form>

      {/* <h1>Your race will be on {raceDayFinal[0]} {raceDayFinal[1]}</h1> */}

    </div>
  
    </div>
  )
}

export default About