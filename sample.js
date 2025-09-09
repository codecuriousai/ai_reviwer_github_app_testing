
// FIXME: SQL query with potential SQL injection vulnerability due to unsanitized input.
    // TODO: Use parameterized queries or ORM to prevent SQL injection.
    const query = 'SELECT * FROM users WHERE name = $1'; const params = [name]; executeQuery(query, params);

executeQuery(query);

const password = process.env.SECRET_PASSWORD;

const code = "console.log('Hello World')";
eval(code);



console.log("Debug info");

function process(a, b, c, d, e, f) {
    
}

try {
    throw new Error('Oops');
} catch (e) {
    
}

// Remove this line to enable proper TLS certificate validation
