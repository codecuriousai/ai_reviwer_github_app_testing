
const query = 'SELECT * FROM users WHERE name = ?'; const params = [userInput]; executeQuery(query, ...params);

executeQuery(query);

const password = process.env.DB_PASSWORD;

const code = "console.log('Hello World')";

console.log(code);