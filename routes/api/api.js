const path = require("path");
const router = require("express").Router();
const axios = require("axios");

router.route('/signup')
    .get(function (req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

router.post('/search', (req, res) => {
    console.log("Searching...");
    console.log(req.body.zip);

    lngLat(req.body.zip);

    function lngLat(zip) {
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" + zip + "&sensor=false&key=AIzaSyA6N-1it5aWPiccey5v0jP30BI9HAlZVME")
            .then(function (data) {
                console.log(data.data.results[0].geometry);
                getInfo(data.data.results[0].geometry.location.lat.toFixed(2), data.data.results[0].geometry.location.lng.toFixed(2));
            })
            .catch(err => res.json(err));
    };

    function getInfo(lat, long) {
        console.log("Api called");
        console.log(lat);
        console.log(long);
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=bar&keyword=beer&key=AIzaSyAu8NcOLpw_ueSUa6w_oE8_rv76uOln-EA&location=${lat},${long}&radius=10000&limit=10`)
            .then((data) => {
                console.log("Search complete.");
                console.log(data.data.results);
                res.json(data.data.results);
            })
            .catch(err => res.json(err));
        // .catch(() => this.setState({ error: true }))
    }

    // res.send('processing the login form!');
});



module.exports = router;