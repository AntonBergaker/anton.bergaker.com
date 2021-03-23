const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const myPath = path.join(__dirname, '/anton.bergaker.com');

app.set('view engine', 'pug');
app.set('views', myPath);

app.use(function (req, res, next) {
    var filename = path.basename(req.url);
    var extension = path.extname(filename);
    if (extension === '') {
        res.render(filename, {}, function(err, html) {
            if (err) {
                console.log(err);
                next();
            } else {
                res.send(html);
            }
        });
    } else {
        next();
    }
});

app.use(express.static(myPath));
app.use(express.static(path.join(__dirname, '/externally_made_stuff')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))