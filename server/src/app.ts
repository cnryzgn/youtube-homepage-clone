import express, { Application, Request, Response } from "express"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()
const app: Application = express()
const PORT: number = 8001
const API_KEY: string | undefined = process.env.API_KEY
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=javascript+tutorial&key=${API_KEY}&maxResults=20`
  )
    .then((result) => result.json())
    .then((data) => res.send(JSON.stringify(data.items)))
    .catch((err) => console.log(err))
})

app.listen(PORT, () =>
  console.log(`Server running : http://localhost:${PORT}`)
)