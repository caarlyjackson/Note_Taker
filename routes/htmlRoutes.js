// Dependencies
const path = require('path');

// Routing
module.exports = (app) => {
    // HTML GET requests
    // View note page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // New note page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}