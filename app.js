const path = require('path');
const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

const publicDirPath = path.join(__dirname, 'public');

app.use(express.static(publicDirPath));

app.listen(port, () => {
    console.log('Server running on port ' + port);
})