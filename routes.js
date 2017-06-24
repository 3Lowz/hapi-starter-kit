import user from './endpoints/user';

function flatten(...routes) {
    return routes.reduce((prev, next) => prev.concat(next), []);
}

export default flatten(
    user
);