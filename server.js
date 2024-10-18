import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

const app = express()


/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();



/** appliation port */
const port = process.env.VITE_PORT || 8080;


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(8000, ()=>{
    console.log(`Server Connected to http://localhost:${port}`);
    
})
