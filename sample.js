const logLevel = getConfig('LOG_LEVEL'); if (logLevel === 'debug' && process.env.NODE_ENV !== 'production') { console.debug("Debug info"); }

function process(a, b, c, d, e, f) {

}

try {
    throw new Error('Oops');
} catch (e) {

}

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
// Use proper certificate validation