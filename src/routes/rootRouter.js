import express from "express"
import magicalCreaturesRouter from "./magicalCreaturesRouter.js"

const rootRouter = new express.Router()

app.get('/', (req, res) => {
  res.send('Hello from the backend')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/podcasts', (req, res) => {
  let podcasts = [
    'The Daily',
    'MBMBAM',
    'Armchair Expert',
    'This American Life',
    'The Besties',
  ]

  res.render('podcast-index', { podcasts: podcasts })
})

// rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter