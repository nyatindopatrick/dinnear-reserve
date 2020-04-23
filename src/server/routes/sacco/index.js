const router = require('express').Router();
const saccoRoutes = require('../../controllers/Sacco');
const { sacco, riders } = saccoRoutes;
router.post('/', sacco);

router.post('/riders', riders);
module.exports = router;
