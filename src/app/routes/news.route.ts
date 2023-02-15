import { express } from './index';
            const newsRoute = express.Router();
const newsController                        = require('../controllers/NewsController');

            newsRoute.get('/', newsController.instance);

module.exports = newsRoute;
