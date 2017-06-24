import Boom from 'boom';
import UserService from './user.service';

class UserController {
    static get(request, reply) {
        new UserService().get((err, data) => {
            if (err) reply(Boom.wrap(err));
            reply(data);
        });
    }
};

export default UserController;