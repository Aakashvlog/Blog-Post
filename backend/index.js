const express = require('express');
const app = express();
require('dotenv').config();
const task = require('./routes/routes');
const connectDB = require('./db/connect');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', task);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

// app.get('/sendData',(req,res)=>{
//     res.json({name: "aakash"});
// })

// app.listen(port, console.log('listening to port 3000'));