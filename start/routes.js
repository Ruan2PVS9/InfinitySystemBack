'use strict'

const PaymantController = require('../app/Controllers/Http/PaymentController');
const Paymant = require('../app/Models/Payment');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world! Welcome to an Infinity System' }
})
Route.post('/register', 'AppController.register');
Route.post('/authenticate', 'AppController.authenticate');
Route.resource('/users', 'UserController').middleware(['auth']);

Route.resource('/payments', 'PaymentController').middleware(['auth']);
Route.resource('/status', 'StatusController').middleware(['auth']);
Route.resource('/promotions', 'PromotionController').middleware(['auth']);

