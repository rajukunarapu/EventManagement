require('dotenv').config();
const app = require('./app');
const DBConnection = require('./Config/DBConnection');


DBConnection().then(() => {
    console.log("DB connected")
    app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT} port`))
}).catch(() => console.log("Something went wrong"))
