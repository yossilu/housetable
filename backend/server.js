// const dotenv = require('dotenv').config({ path:  '.env' });
const dotenv = require('dotenv');
const result = dotenv.config();
const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const sequelize = require('./config/db');
const corsOptions = require('./config/corsOptions');
const port = process.env.PORT || 3500;



const app = express();

const connectDB = async () => {
    try {
      const conn = await sequelize.authenticate();
  
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database: ', error);
      process.exit(1)
    }
  
};

connectDB();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use('/api/houses', require('./routes/houses'));
// app.use('/files', require('./routes/filesRoutes'));


// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));