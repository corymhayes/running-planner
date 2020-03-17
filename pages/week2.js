import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Home = ({ data }) => {
  const week = Object.values(data[`week-2`])
  return(
    <div>

      <Head>
        <title>Home</title>
        <link rel="icon" href="" />
      </Head>

      <Link href="/">
        <a>Prev Week</a>
      </Link>

      {
       week.map((foo, i) => (
          <div key={i}>
            <h1>{foo.label}</h1>
            <p>{foo.exercise}</p>
          </div>
        ))
      }

    </div>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/daily')
//   const json = await res.json()
  
//   return { data: json }
// }

export default Home