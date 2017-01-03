var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};

router.get('/getUser', function(req, res, next) {
    var data = [
        {
            id:1,
            name:"dds1",
            age:"18",
            sex:"man"
        },
        {
            id:2,
            name:"dds2",
            age:"18",
            sex:"man"
        }
    ];

    res.json(data);
});



router.get('/getAdminUser', function(req, res, next) {
    var data = [
        {
            id:1,
            name:"Admin1",
            age:"18",
            sex:"man"
        },
        {
            id:2,
            name:"Admin2",
            age:"18",
            sex:"man"
        }
    ];

    res.json(data);
});


module.exports = router;
