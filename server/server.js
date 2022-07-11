//node modules import
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


//custom modules importing
import testRouter from './routes/testRouter.js';


const server = express();

//loading environment variables
dotenv.config();

// using 
server.use(cors()); // version 0 : enabling sharing with other servers
server.use(express.json()); // accessing the request body 

// using the routes
    // testing route
    server.use('/test', testRouter);


// defining a PORT variable 
const PORT = process.env.PORT;

// listening to the PORT. and running the server
server.listen(PORT, ()=>console.log(`Server is listening to port ${PORT} and running`))
