/*
    # Author: Bharat Gupta
    # Date: 5th August, 2019
    # Description: index.js file for Node App
    # Copyright (c). All Rights Reserved.
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(
        {hello:'world'}
    );
});

const PORT = process.env.PORT || 3009;
app.listen(PORT);