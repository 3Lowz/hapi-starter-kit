import Hapi from 'hapi';
import routes from './routes';
// import globals from './globals';

let env = process.env.NODE_ENV || 'development';
let config = require(`./config/config.${env}`).default;

let server = new Hapi.Server({
    app: config,
    // cache: config.CACHE
    connections: {
        routes: {
            cors: true
        }
    },
    debug: {
        request: ['error']
    }
});

server.connection({ port: (config.PORT || 3004 )});

let startServer = () => {
    // Initilizing routes
    routes.forEach((route) => {
        server.route(route);
    });

    // Attaching global methods
    // globals.forEach((global) => {
    //     server.app[global.name] = global.fn;
    // });

    server.start(() => {
        console.log('Server running at: ', server.info.uri);
    });

    // Initilizing cache
    /*
        cache configuration also commented in config.${env}
    */
    // const mongoCacheClient = server.cache({
    //     cache: 'mongoCache',
    //     segment: 'default',
    //     expiresIn: 1000 * 60 * 60
    // });
    // server.app.mongoCache = mongoCacheClient;

    return server;
};

export default startServer;