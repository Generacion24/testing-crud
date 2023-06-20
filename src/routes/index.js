const express = require('express');
const routerBook = require('./book.router');
const routerAuthor = require('./author.router');
const router = express.Router();

// colocar las rutas aquí

router.use('/books', routerBook)
router.use('/authors', routerAuthor)

module.exports = router;