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
    // latlng(req.body.zipcode)

    function lngLat(zip) {
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:" + zip + "&sensor=false&key=AIzaSyA6N-1it5aWPiccey5v0jP30BI9HAlZVME&limit=10")
            .then(function (data) {
                getInfo(data.data.results[0].geometry.location.lat.toFixed(2), data.data.results[0].geometry.location.lng.toFixed(2));
            })
            .catch(err => res.json(err));
    };

    function getInfo(lat, long) {
        console.log("Brew Api called");
        let results = {}
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=bar&keyword=beer&key=AIzaSyAu8NcOLpw_ueSUa6w_oE8_rv76uOln-EA&location=${lat},${long}&radius=10000&limit=10`)
            .then(function (data) {
                results.brews = data.data.results.slice(0, 5)
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=park&keyword=dog&key=AIzaSyAu8NcOLpw_ueSUa6w_oE8_rv76uOln-EA&location=${lat},${long}&radius=10000&limit=10`).then(r => {
                    results.barks = r.data.results.slice(0, 5)
                    console.log(results)
                    res.json(results)
                })
            })
            .catch(err => res.json(err));
    };

});



module.exports = router;