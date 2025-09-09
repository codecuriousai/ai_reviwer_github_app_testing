
const query = 'SELECT * FROM users WHERE name = ?';

executeQuery(query);

const password = process.env.SECRET_PASSWORD;

const code = "console.log('Hello World')";
new Function(code)();



console.log("Debug info");

function process(a, b, c, d, e, f) {
    
}

try {
    throw new Error('Oops');
} catch (e) {
    
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
