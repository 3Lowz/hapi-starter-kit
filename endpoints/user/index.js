import Joi from 'joi';
import UserController from './user.controller';
import UserModel from './user.model';

export default {
    method: 'GET',
    path: '/user',
    handler: UserController.get,
    config: {
        // cache: {}
        validate: {},
        response: {
            schema: UserModel
        }
    }
};
