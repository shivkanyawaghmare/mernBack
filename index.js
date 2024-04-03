// const express = require('express');
// const app = express()
// app.use(express.json())
// const newsRoute = require('./routes/newsRoute')
// app.use('/api/newsitems/',newsRoute)
// require('./dbConnect');
// const port = 8000

// app.listen(port,() => {
//     console.log(`Server is running on port ${port}`)
// })

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const userRoutes = require('./routes/userRoutes'); // Assuming you have transaction routes defined in this file
const Transaction = require('./models/Transaction'); // Import the Transaction model
const userRoute = require('./routes/userRoute')



const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/', userRoutes);
app.use('/api/users/',userRoute)
document.write('Hello');


// MongoDB connection
mongoose.connect('mongodb+srv://pawarshiv2023:shivkanya@cluster1.klsiueo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
