const express = require('express')
const app = express()
var path = require('path')
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}`));
