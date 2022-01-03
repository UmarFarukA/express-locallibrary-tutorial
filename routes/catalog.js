var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router
    .route('/')
    .get(book_controller.index);

router
    .route('/book/create')
    .get(book_controller.book_create_get)
    .post(book_controller.book_create_post)
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
//router.get('/book/');

// POST request for creating Book.
//router.post('/book/');
router
    .route('/book/:id/delete')
    .get(book_controller.book_delete_get)
    .post(book_controller.book_delete_post);

router
    .route('/book/:id/update')
    .post(book_controller.book_update_post);

// GET request to delete Book.
//router.get('/book/:id/');

// POST request to delete Book.
//router.post('/book/:id/');

// GET request to update Book.
//router.get('/book/:id/');

// POST request to update Book.
//router.post('/book/:id/');

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
//router.get('/author/create');
// POST request for creating Author.
//router.post('/author/create');

router
    .route('/author/create')
    .get(author_controller.author_create_get)
    .post(author_controller.author_create_post);

// GET request to delete Author.
//router.get('/author/:id/delete', author_controller.author_delete_get);

router
    .route('/author/:id/delete')
    .get(author_controller.author_delete_post);

router
    .route('/author/:id/update')
    .get(author_controller.author_update_get)
    .post(author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);
// POST request to delete Author.
//router.post('/author/:id/delete', );
// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

// GET request to update Author.
//router.get('/author/:id/);

// POST request to update Author.
//router.post('/author/:id/);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

router
    .route('/genre/create')
    .get(genre_controller.genre_create_post);

//POST request for creating Genre.
//router.post('/genre/');

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

router
    .route('/genre/:id/delete')
    .post(genre_controller.genre_delete_post);
router
    .route('/genre/:id/update')
    .get(genre_controller.genre_update_get)
    .post(genre_controller.genre_update_post);
// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

// POST request to delete Genre.
//router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
//router.get('/genre/:id/');

// POST request to update Genre.
//router.post('/genre/:id/');

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/');

router
    .route('/bookinstance/create')
    .get(book_instance_controller.bookinstance_create_get)
    .get(book_instance_controller.bookinstance_create_post);


router
    .route('/bookinstance/:id/delete')
    .get(book_instance_controller.bookinstance_delete_get)
    .post(book_instance_controller.bookinstance_delete_post);

router
    .route('/bookinstance/:id/update')
    .get(book_instance_controller.bookinstance_update_get)
    .post(book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

// POST request for creating BookInstance.
//router.post('/bookinstance/create',);

// GET request to delete BookInstance.
//router.get('/bookinstance/:id/delete');

// POST request to delete BookInstance.
//router.post('/bookinstance/:id/');

// GET request to update BookInstance.
//router.get('/bookinstance/:id/');

// POST request to update BookInstance.
//router.post('/bookinstance/:id/');



module.exports = router;
