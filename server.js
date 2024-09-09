const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const port = 6000;

// Middleware
app.use(bodyParser.json());


app.use(cors())

// app.use(cors({
//     origin: 'https://ominous-guacamole-64697grv4jq25xx5-3000.app.github.dev', // Replace with your frontend's origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));
// app.options('*', cors());
const mongoURI = 'mongodb+srv://aamar:Winter32@cluster0.ly7c8iu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


    // app.get('/api/beneficiaries', async (req, res) => {
    //     try {
    //         const beneficiaries = await Beneficiary.find();
    //         res.json(beneficiaries);
    //     } catch (error) {
    //         console.error('Error fetching beneficiaries:', error);
    //         res.status(500).json({ error: 'An error occurred while fetching beneficiaries' });
    //     }
    // });
    // app.use("/api/v1", require("./routes/index"));
    app.use('*', function(req, res){
      res.status(404)  
       .json({
             success: true,
             status: 404,
             message: "Api Not Found",
             });
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });