const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRoutes = require('./Routers/userRoutes')
const eventRoutes = require('./Routers/eventRoutes')

const app = express();

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [`${process.env.VITE_URL}`]

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    console.log("Origin: ", origin);
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // cookies/auth headers
}));

app.use('/user',userRoutes)
app.use('/event',eventRoutes)



module.exports = app;