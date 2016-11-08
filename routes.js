var reviews = require('./models/reviews');


function getreviews(res) {
    Todo.find(function (err, reviews) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(reviews); // return all todos in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/reviews', function (req, res) {
        // use mongoose to get all todos in the database
        getreviews(res);
    });
}