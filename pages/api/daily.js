import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { ObjectID } from 'mongodb'

import scaffold from './dbScaffold'
import schedule from './schedule'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  let doc = {}
  doc = await req.db.collection('half-novice-1').findOne()
  res.json(doc)
})

// handler.post(async (req, res) => {
//   const data = req.body
//   let newSchedule = schedule(scaffold(data))

//   try{
//     req.db.collection('half-novice-1').insertOne(
//       { _id: ObjectID(), ...newSchedule }
//     )
//   } catch (e) {
//     console.log(e)
//   }
// })

export default handler