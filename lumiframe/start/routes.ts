/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PagesController = () => import('#controllers/pages_controller')

router.get('/', [PagesController, 'home'])
router.get('/search', [PagesController, 'search'])
router.get('/services', [PagesController, 'services'])
router.get('/display', [PagesController, 'display'])     
router.get('/display/:id', [PagesController, 'display']) 
router.get('/transaction', [PagesController, 'transaction'])
router.get('/seller', [PagesController, 'seller'])
router.get('/about', [PagesController, 'about'])
router.get('/contact', [PagesController, 'contact'])
