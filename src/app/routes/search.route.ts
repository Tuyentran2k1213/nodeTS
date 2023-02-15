import { express } from './index';
const searchRoute = express.Router();
const searchController = require('../controllers/SearchController');

searchRoute.get('/', searchController.instance);

module.exports = searchRoute;
