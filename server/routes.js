const express = require('express');
const router = express.Router();

class Routes {
    static test(req, res) {
        res.json({ test: ['test', 'test2', 'test3', 'test4'] });
    }
    static reservation(req, res) {
        console.log(req.body);
        res.status(200).json({ message: 'OK' });
    }
}

router.get('/api', Routes.test);
router.post('/resa',Routes.reservation)

module.exports = router; // <- Tu exportes bien `router`