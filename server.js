const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

// Router - navigates the server to 'route' files.
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

// Listener - starts the server.
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));