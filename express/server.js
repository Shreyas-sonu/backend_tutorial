const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(app.get('env'));//development we'll get but not accessible in express to avoid we set .env file

// console.log(process.env);//check all configuration in node app
const port =process.env.PORT || 5000 ;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
