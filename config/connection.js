const mysql = require('mysql');
const dsn = "mysql://sjhfagm0irjhw8xe:v7s35e2nbnn960si@qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xhi5e4l9m4w33r5n"
const connection = mysql.createConnection({
  host:"qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user:"sjhfagm0irjhw8xe",
  password:"v7s35e2nbnn960si",
  database:"xhi5e4l9m4w33r5n",
});
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
// Export connection for our ORM to use.
module.exports = connection;