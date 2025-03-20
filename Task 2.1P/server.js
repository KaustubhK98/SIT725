const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a && b)) {
        return res.send("Error: Please provide a valid number");
    }

    const sum = a + b;

    res.send(`The addition is: ${sum}`);
});

app.listen(port, () => {
    console.log("App listening to: " + port)
})

