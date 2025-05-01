const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sum.html'));
});


app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const result = num1 + num2;
    res.json({ result });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

