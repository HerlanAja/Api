const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/itemRoutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));