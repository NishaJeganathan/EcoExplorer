// server.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Handle uncaught exceptions first
process.on('uncaughtException', (err) => {
  console.error('💥 UNCAUGHT EXCEPTION!');
  console.error(err.name, err.message);
  console.error(err.stack);
  process.exit(1);
});

// Load env variables
dotenv.config({ path: './.env' });

const app = require('./app');

// MongoDB connection
const DB = process.env.DATABASE;
if (!DB) {
  console.error('❌ DATABASE connection string not found in .env!');
  process.exit(1);
}

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ DB connection successful!'))
  .catch((err) => {
    console.error('❌ DB connection error:', err.message);
    console.error(err.stack);
    process.exit(1);
  });

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`✅ App running on port ${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('💥 UNHANDLED REJECTION!');
  console.error(err.name, err.message);
  console.error(err.stack);
  server.close(() => process.exit(1));
});
