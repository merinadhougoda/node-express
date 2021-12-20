const express = require('express');

import * as secretController from 'secret/http/controller/secret.controller';

const secretRouter = express.Router();

secretRouter.post('/secrets').post(secretController.postSecret);
secretRouter.get('/secrets/:id').get(secretController.getSingleSecret);

export { secretRouter };
