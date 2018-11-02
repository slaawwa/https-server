
import Hapi from 'hapi'

import inert from 'inert'

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});


const init = async () => {

    await server.register(inert);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            debugger;
            console.log('-> request:1::', request)

            return h.file('./frontend/dist/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/favicon.png',
        handler: (request, h) => {

            return h.file('./frontend/dist/favicon.png');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
