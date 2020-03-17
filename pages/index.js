import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const Home = ({ data }, props) => {
  const [weekNum, setWeekNum] = useState(1)

  const nextWeek = () => {
    if(weekNum < 12){
      setWeekNum(weekNum => weekNum += 1);
    } else {
      setWeekNum(12);
    }
  }

  const prevWeek = () => {
    if(weekNum > 1){
      setWeekNum(weekNum => weekNum -= 1);
    } else {
      setWeekNum(1)
    }
  }

  return(
    <Layout>

    <div className="container">

      <Head>
        <title>Week 1</title>
        <link rel="icon" href="" />
      </Head>


      <div className="week-header">
        <h1>{data[`week${weekNum}`].label}</h1>
      </div>


      {/* <div className="exercise-grid">
        <div onClick={prevWeek} className="prev-button">&lt;</div>
        <div className="dummy-container">
          {
            Object.values(data[`week${weekNum}`]).slice(0,7).map((foo, i) => (
              <div key={i} className="details-container">
                <div className="tag-guide">
                  {
                    foo.tag === 'rest' ? 
                    <div className="tag-dot rest"></div> : 
                    foo.tag === 'run' ?
                    <div className="tag-dot run"></div> :
                    foo.tag === 'cross' ? 
                    <div className="tag-dot cross"></div> :
                    foo.tag === 'crossrun' ? 
                    <div className="tag-dot crossrun"></div> :
                    <div className="tag-dot other"></div>
                  }
                  
                  <div className={i < 6 ? 'tag-line' : 'tag-line-last'}></div>
                </div>
              
                <div className="day-exercise">
                  <h1>{foo.label} - {foo.raceDay}</h1>
                  <p>{foo.exercise}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div onClick={nextWeek} className="next-button">&gt;</div>
      </div> */}

      <style jsx>{`
        .container{
          height: 100%;
          width: 100%;
          padding-top: 5rem;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          font-family: sans-serif;
        }
        
        .week-header{
          font-size: 4rem;
          margin: 0 0 3rem 0;
          padding: 0;
        }
        
        .week-header h1{
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          font-weight: 1000;
        }
        
        .exercise-grid{
          display: grid;
          grid-template-columns: 25% 50% 25%;
          width: 100%;
        }

        .prev-button,
        .next-button{
          font-size: 5rem;
          font-weight: 100;
        }

        .prev-button{
          justify-self: end;
          align-self: center;
          grid-column: 1;
        }
        
        .next-button{
          align-self: center;
          grid-column: 3;
        }

        .dummy-container{
          grid-column: 2;
          display: grid;
          grid-template-rows: repeat(7, 14.25%);
        }
        
        .details-container{
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 0 0 3rem 0;
        }
        
        .tag-guide{
          display: grid;
          grid-template-rows: 35% 125%;
        }
        
        .tag-line{
          height: 100%;
          width: 1px;
          background-color: #c3c3c3;
          place-self: end;
          margin-right: .3rem;
        }
        
        .tag-line-last{
          display: hidden;
        }
        
        .day-exercise{
          margin-left: 2.5rem;
          align-self: center;
        }
        
        .day-exercise h1{
          margin: 0;
          font-size: 2rem;
          line-height: 10px;
        }
        
        
        .tag-dot{
          align-self: start;
          justify-self: end;
          height: 10px;
          width: 10px;
          border-radius: 100px;
        }
        .rest{
          background-color: cyan;
        }
        .run{
          background-color: red;
        }
        .cross{
          background-color: yellow;
        }
        .crossrun{
          background-color: orange;
        }
        .other{
          background-color: black;
        }
        
        `}
      </style>
    </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/daily')
  const data = await res.json()
  
  return { data }
}

export default Home