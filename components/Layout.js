import React from 'react'

const Layout = props => (
  <div>
    {props.children}

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,900,900i&display=swap');

      *{
        font-family: 'Source Code Pro', monospace;
      }

      body{
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

export default Layout