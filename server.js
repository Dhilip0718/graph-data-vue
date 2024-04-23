const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const port = 3000;

// Sample graph data to be edited later with DB data
const graphData = {
    "data": [
        {
            "name": "A",
            "description": "This is a description of A",
            "parent": ""
        },
        {
            "name": "B",
            "description": "This is a description of B",
            "parent": "A"
        },
        {
            "name": "C",
            "description": "This is a description of C",
            "parent": "A"
        },
        {
            "name": "D",
            "description": "This is a description of D",
            "parent": "A"
        },
        {
            "name": "B-1",
            "description": "This is a description of B-1",
            "parent": "B"
        },
        {
            "name": "B-2",
            "description": "This is a description of B-2",
            "parent": "B"
        },
        {
            "name": "B-3",
            "description": "This is a description of B-3",
            "parent": "B"
        }
    ]
}

app.use(bodyParser.json());

// Endpoint to serve graph data
app.get('/graph-data', (req, res) => {
    console.log('Data processing----->')
    res.json(graphData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
