const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected!');
});

app.use(express.json());
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PATCH, PUT, DELETE',
  optionsSuccessStatus: 204
}
app.use(cors(corsOptions));


const usersRouter = require('./routes/users.route');

app.use('/api/users', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
