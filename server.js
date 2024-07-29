const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // ! Deprecation parameters
    // useNewUrlParser defines how the connection string is parsed
    useNewUrlParser: true,
    // useCreateIndex ensures that when there is a new index, it is created
    useCreateIndex: true,
    // useFindAndModify ensures that the findAndModify is used for all queries
    useFindAndModify: false,
    // useUnifiedTopology ensures that the server discovery and monitoring engine is used
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const hostname = '0.0.0.0';
const port = process.env.port || 3000;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
