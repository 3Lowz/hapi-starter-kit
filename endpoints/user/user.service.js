class User {
    constructor() {}

    get (callback) {
        // logic goes here...
        callback(null, [{
            name: 'john',
            surname: 'dirac'
        }]);
    }
}

export default User;