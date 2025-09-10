
const query = 'SELECT * FROM users WHERE name = $1'; const params = [userInput]; const user = await executeQuery(query, params);

executeQuery(query);

// const password = process.env.DB_PASSWORD;

const code = "console.log('Hello World')";

console.log(code);