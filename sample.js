const logLevel = getConfig('LOG_LEVEL'); const isDebugEnabled = logLevel === 'debug' && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production'); if (isDebugEnabled) { console.debug("Debug info"); }

function process() {

}

try {
    throw new Error('Oops');
} catch (e) {
    console.error('An error occurred:', e);
}

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
// Use proper certificate validation